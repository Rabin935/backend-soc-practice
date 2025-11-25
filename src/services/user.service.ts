import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../types/user.type";

export class UserService {
  private userRepo = new UserRepository();

  getAllUsers(): User[] {
    return this.userRepo.getAll();
  }

  getUser(id: string): User | undefined {
    return this.userRepo.getById(id);
  }

  createUser(dto: CreateUserDTO): User | Error {
    if (this.userRepo.getById(dto.id)) {
      throw new Error("User ID already exists");
    }
    if (this.userRepo.findByEmail(dto.email)) {
      throw new Error("Email already exists");
    }
    if (this.userRepo.findByUsername(dto.username)) {
      throw new Error("Username already exists");
    }

    return this.userRepo.create(dto);
  }

  updateUser(id: string, dto: UpdateUserDTO): User {
    const existing = this.userRepo.getById(id);
    if (!existing) throw new Error("User not found");

    if (this.userRepo.findByEmail(dto.email) && dto.email !== existing.email)
      throw new Error("Email already exists");

    if (this.userRepo.findByUsername(dto.username) && dto.username !== existing.username)
      throw new Error("Username already exists");

    const updated: User = { id, ...dto };

    return this.userRepo.update(id, updated);
  }

  deleteUser(id: string): void {
    const existing = this.userRepo.getById(id);
    if (!existing) throw new Error("User not found");

    this.userRepo.delete(id);
  }
}
