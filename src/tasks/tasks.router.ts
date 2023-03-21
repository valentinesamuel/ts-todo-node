import { Router, Response, Request } from "express";

export const tasksRouter:Router = Router()

tasksRouter.get('/tasks', (req: Request, res: Response) => {
  res.send('Express + Typscript');
});