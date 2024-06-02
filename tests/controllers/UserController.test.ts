import { Request, Response } from "express";
import UserController from "../../src/controllers/UserController";
import UserRepository from "../../src/repositories/UserRepository";

describe("UserController", () => {
  describe("getById", () => {
    it("deve retornar 200 se o usuário for encontrado", () => {
      const req = { params: { id: "1" } } as unknown as Request;
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;
      const user = { id: 1, nome: "Carlos" };

      jest.spyOn(UserRepository, 'findById').mockReturnValue(user);
      UserController.getById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(user);
    });

    it("deve retornar 400 caso o id esteja num formato inválido", () => {
      const req = { params: {} } as Request;
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

      UserController.getById(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Formato de id inválido" });
    });

    it("should return 404 if user is not found", () => {
      const req = { params: { id: "3" } } as unknown as Request;
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

      jest.spyOn(UserRepository, 'findById').mockReturnValue(undefined);
      UserController.getById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Usuário não encontrado" });
    });
  });
});