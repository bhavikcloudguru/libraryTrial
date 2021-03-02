export class TaskMockService {
  tasks = [
    {
      id: '6038de4a3b1e830d4cc1aa57',
      name: 'Pay electricity bill',
      status: 'TO_DO'
    },
    {
      id: '6038de4a6b7ca2b23519f4fa',
      name: 'Iron clothes',
      status: 'IN_PROGRESS'
    },
    {
      id: '6038de4aff61de62b8417b48',
      name: 'Buy running shoes',
      status: 'DONE'
    },
    {
      id: '6038de4ad25ac84307ad8f02',
      name: 'Make grocery list',
      status: 'TO_DO'
    },
    {
      id: '6038de4a3fcdcc06e5633614',
      name: 'Buy vegetables',
      status: 'IN_PROGRESS'
    },
  ];
  statuses = [
    {
      name: 'TO_DO',
      label: 'TO DO',
      showAddCardForm: false,
    },
    {
      name: 'IN_PROGRESS',
      label: 'IN PROGRESS',
      showAddCardForm: false,
    },
    {
      name: 'DONE',
      label: 'DONE',
      showAddCardForm: false,
    },
  ];

  getTaskList() {
    return this.tasks;
  }

  getTaskStatuses() {
    return this.statuses;
  }
}
