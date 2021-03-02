// Angular related import
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Models
import { Task, TaskStatus } from '../models/task.model.';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    {
      id: '6038de4a3b1e830d4cc1aa57',
      name: 'Pay electricity bill',
      status: 'TO_DO'
    },
    {
      id: '6038de4a6b7ca2b23519f4fa',
      name: 'Iron clothes',
      status: 'IN_PROGRESS',
    },
    {
      id: '6038de4aff61de62b8417b48',
      name: 'Buy running shoes',
      status: 'DONE',
    },
    {
      id: '6038de4ad25ac84307ad8f02',
      name: 'Make grocery list',
      status: 'TO_DO',
    },
    {
      id: '6038de4a3fcdcc06e5633614',
      name: 'Buy vegetables',
      status: 'IN_PROGRESS',
    },
  ];
  public taskStatuses: TaskStatus[] = [];
  public $getTaskList = new BehaviorSubject<Task[]>(this.tasks);
  public $getTaskStatusList = new BehaviorSubject<TaskStatus[]>([]);

  constructor() {
    this.taskStatuses = [];
    this.tasks.forEach((task) => {
      let statusName = task.status.toUpperCase().split('_').join(' ');
      if (!this.checkIfStatusExists(task.status)) {
        this.taskStatuses.push({
          name: task.status,
          label: statusName,
          showAddCardForm: false,
        });
      }
    });
    this.$getTaskStatusList.next(this.taskStatuses);
  }
  /**
   *
   * @param taskToAdded: task will be added in the list
   */
  public updateTaskList(taskToAdded: Task): void {
    this.tasks.push(taskToAdded);
    this.$getTaskList.next(this.tasks);
  }

  /**
   *
   * @param taskStatusToBeAdded: task status that need to be added in list
   */
  public updateTaskStatus(taskStatusToBeAdded: TaskStatus): void {
    this.taskStatuses.push(taskStatusToBeAdded);
    this.$getTaskStatusList.next(this.taskStatuses);
  }

  public checkIfStatusExists(name: string) {
    return this.taskStatuses.find(
      (status) => status.name.toLowerCase() == name.toLowerCase()
    );
  }
}
