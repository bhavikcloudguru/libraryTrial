import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  let tasks = [
    {
      id: '6038de4a3b1e830d4cc1aa57',
      name: 'Pay electricity bill',
      status: 'TO_DO',
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
      status: 'TO_DO'
    },
    {
      id: '6038de4a3fcdcc06e5633614',
      name: 'Buy vegetables',
      status: 'IN_PROGRESS',
    },
  ];
  let statuses = [
    {
      "name": "TO_DO",
      "label": "TO DO",
      "showAddCardForm": false
    },
    {
      "name": "IN_PROGRESS",
      "label": "IN PROGRESS",
      "showAddCardForm": false
    },
    {
      "name": "DONE",
      "label": "DONE",
      "showAddCardForm": false
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Subscribing to $getTaskList should return list of tasks', (done: DoneFn) => {
    service.$getTaskList.subscribe((value) => {
      expect(value).toEqual(tasks);
      done();
    });
  });

  it('Subscribing to $getTaskStatusList should return list of task statuses', (done: DoneFn) => {
    service.$getTaskStatusList.subscribe((value) => {
      expect(value).toEqual(statuses);
      done();
    });
  });
});
