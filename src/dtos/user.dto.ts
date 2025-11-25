export interface CreateUserDTO {
  id: string;
  username: string;
  email: string;
  name: string;
  age?: number | null;
}

export interface UpdateUserDTO {
  username: string;
  email: string;
  name: string;
  age?: number | null;
}