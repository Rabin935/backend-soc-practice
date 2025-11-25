import { User } from "../types/user.type";

let users: User[] = [
  { id: "user1", username: "john_doe", email: "john@example.com", name: "John Doe", age: 30 },
  { id: "user2", username: "jane_smith", email: "jane@example.com", name: "Jane Smith", age: 25 },
];

export class UserRepository {
  getAll(): User[] {
    return users;
  }

  getById(id: string): User | undefined {
    return users.find((u) => u.id === id);
  }

  create(user: User): User {
    users.push(user);
    return user;
  }

  update(id: string, updatedUser: User): User {
    const index = users.findIndex((u) => u.id === id);
    users[index] = updatedUser;
    return users[index];
  }

  delete(id: string): void {
    users = users.filter((u) => u.id !== id);
  }

  findByEmail(email: string): User | undefined {
    return users.find((u) => u.email === email);
  }

  findByUsername(username: string): User | undefined {
    return users.find((u) => u.username === username);
  }
}
