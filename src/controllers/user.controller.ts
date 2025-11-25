import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  getAll = (req: Request, res: Response) => {
    return res.json(this.userService.getAllUsers());
  };

  getOne = (req: Request, res: Response) => {
    const user = this.userService.getUser(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  };

  create = (req: Request, res: Response) => {
    try {
      const newUser = this.userService.createUser(req.body);
      return res.status(201).json(newUser);
    } catch (err: any) {
      return res.status(409).json({ error: err.message });
    }
  };

  update = (req: Request, res: Response) => {
    try {
      const updated = this.userService.updateUser(req.params.id, req.body);
      return res.json(updated);
    } catch (err: any) {
      if (err.message === "User not found") return res.status(404).json({ error: err.message });
      return res.status(409).json({ error: err.message });
    }
  };

  delete = (req: Request, res: Response) => {
    try {
      this.userService.deleteUser(req.params.id);
      return res.status(204).send();
    } catch (err: any) {
      return res.status(404).json({ error: err.message });
    }
  };
}
