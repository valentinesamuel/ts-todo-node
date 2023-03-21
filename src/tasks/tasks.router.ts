import { createValidator } from './tasks.validator';
import { Router } from 'express';
import { tasksController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', tasksController.getAll);

tasksRouter.post(
  '/tasks',
  createValidator,
  tasksController.create,
);
