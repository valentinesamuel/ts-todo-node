import { Priority } from './../enums/priority';
import { body } from 'express-validator';
import { Status } from '../enums/status';
export const createValidator = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title is mandatory')
    .trim()
    .isString()
    .withMessage('TItle needs to be in tect format'),

  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage(
      'The date needs to be a valid date format',
    ),

  body('description')
    .not()
    .isString()
    .withMessage('Description needs to be in text format'),

  body('priority')
    .trim()
    .isIn([Priority.high, Priority.low, Priority.normal])
    .withMessage(
      'Priority can only be normal, high or low',
    ),

  body('status')
    .trim()
    .isIn([
      Status.completed,
      Status.inProgress,
      Status.todo,
    ])
    .withMessage(
      'Status can only be completed, inProgress or todo',
    ),
];
