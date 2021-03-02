import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model.';
@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListItemComponent implements OnInit {
  @Input() taskDetails: Task = <Task>{};

  constructor() {}

  ngOnInit(): void {}
}
