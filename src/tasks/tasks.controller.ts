import { AppDataSource } from '../..';
import { Task } from './tasks.entity';

export class TasksController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  public async getAll(): Promise<Task[]> {
    try {
      let allTasks: Task[];
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
