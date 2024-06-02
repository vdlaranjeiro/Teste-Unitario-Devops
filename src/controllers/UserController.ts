import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

class UserController {
  public getById(req: Request, res: Response): Response {
    try {
      const { id } = req.params;
      if(!id || isNaN(Number(id))) {
        return res.status(400).json({ message: "Formato de id inválido" });
      }

      const userId = parseInt(id);
      const user = UserRepository.findById(userId)

      if(!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ message: "Erro interno no servidor" });	
    }
  }
}

export default new UserController();
