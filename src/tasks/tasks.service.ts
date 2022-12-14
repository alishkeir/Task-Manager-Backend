import { User } from './../auth/user.entity';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  // //* Get All Tasks
  getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Array<Task>> {
    return this.tasksRepository.getTasks(filterDTO, user);
  }

  // //* Get a Task by ID
  async getTaskByID(id: string, user: User): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id, user } });

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  // //* Create a new Task
  async createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDTO, user);
  }
  // //* Delete a Task by ID
  async deleteTask(id: string, user: User): Promise<void> {
    const result = await this.tasksRepository.delete({ id, user });

    if (result.affected == 0) {
      throw new NotFoundException(`Task with ID ${id} is not found`);
    }
  }

  // //* Update a Task Status by ID
  async updateTask(id: string, status: TaskStatus, user: User): Promise<Task> {
    const task = await this.getTaskByID(id, user);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }
}
