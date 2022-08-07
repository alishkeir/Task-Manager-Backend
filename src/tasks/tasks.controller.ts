import { User } from './../auth/user.entity';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //* Get All Tasks
  @Get() // '/tasks'
  getTasks(
    @Query()
    filterDTO: GetTasksFilterDTO,
    @GetUser()
    user: User,
  ): Promise<Array<Task>> {
    //* if we have any filters defined, call taskService.GetAllTasksWithFilter
    //* otherwise, just get all tasks

    return this.tasksService.getTasks(filterDTO, user);
  }

  // //* Get a Task by ID
  @Get('/:id')
  getTaskByID(
    @Param('id')
    id: string,
    @GetUser()
    user: User,
  ): Promise<Task> {
    return this.tasksService.getTaskByID(id, user);
  }

  // //* Create a new Task
  @Post()
  createTask(
    @Body()
    createTaskDTO: CreateTaskDTO,
    @GetUser()
    user: User,
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO, user);
  }

  // //* Delete a Task by ID
  @Delete('/:id')
  deleteTask(
    @Param('id')
    id: string,
    @GetUser()
    user: User,
  ): Promise<void> {
    return this.tasksService.deleteTask(id, user);
  }

  // //* Update a Task Status by ID
  @Patch('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
    @GetUser()
    user: User,
  ): Promise<Task> {
    const { status } = updateTaskStatusDTO;
    return this.tasksService.updateTask(id, status, user);
  }
}
