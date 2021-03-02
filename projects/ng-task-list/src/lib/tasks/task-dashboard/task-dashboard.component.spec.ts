import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from '../services/task.service';
import { TaskMockService } from '../services/task-mock.service';

import { TaskDashboardComponent } from './task-dashboard.component';

describe('TaskDashboardComponent', () => {
  let component: TaskDashboardComponent;
  let fixture: ComponentFixture<TaskDashboardComponent>;
  let taskMockService: TaskMockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDashboardComponent ],
      providers: [TaskService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashboardComponent);
    component = fixture.componentInstance;
    taskMockService = new TaskMockService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('task list should be set', () => {
    expect(component.taskList).toEqual(taskMockService.getTaskList());
  });

  it('task statuses should be set', () => {
    expect(component.taskStatuses).toEqual(taskMockService.getTaskStatuses());
  });
});
