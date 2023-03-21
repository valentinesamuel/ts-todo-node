import { createValidator } from './tasks.validator';
import { Router, Response, Request } from 'express';
import { tasksController } from './tasks.controller';
import { validationResult } from 'express-validator';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', tasksController.getAll);

tasksRouter.post(
  '/tasks',
  createValidator,
  // @ts-ignore
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
  },
);
