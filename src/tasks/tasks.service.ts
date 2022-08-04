import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  // //* Get All Tasks
  // getAllTasks(): Array<Task> {
  //   return this.tasks;
  // }
  // //* Get a Task by ID
  // getTaskByID(id: string): Task {
  //   const found = this.tasks.find((task) => task.id == id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   }
  //   return found;
  // }
  // //* Create a new Task
  // createTask(createTaskDTO: CreateTaskDTO): Task {
  //   const { title, description } = createTaskDTO;
  //   const task: Task = {
  //     id: UUID(),
  //     title: title,
  //     description: description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // //* Delete a Task by ID
  // deleteTask(id: string): void {
  //   const found = this.getTaskByID(id);
  //   const indexOfTask = this.tasks.findIndex((object) => {
  //     return object.id == found.id;
  //   });
  //   this.tasks.splice(indexOfTask, 1);
  // }
  // //* Update a Task Status by ID
  // updateTask(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskByID(id);
  //   task.status = status;
  //   return task;
  // }
  // //* Get All Task by Filter or Search
  // GetTasksWithFilter(filterDTO: GetTasksFilterDTO): Array<Task> {
  //   const { status, search } = filterDTO;
  //   let tasks = this.getAllTasks();
  //   //* do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status == status);
  //   }
  //   //* do something with search
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search.toLowerCase()) ||
  //         task.description.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   return tasks;
  // }
}
