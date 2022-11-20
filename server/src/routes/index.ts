import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router()

routes.post("/api/users", UserController.create);
routes.delete("/api/users", UserController.deleteUser)
routes.post("/api/login", UserController.login);

export default routes