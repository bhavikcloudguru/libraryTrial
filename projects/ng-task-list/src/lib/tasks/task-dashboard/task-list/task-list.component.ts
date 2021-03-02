import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Task, TaskStatus } from '../../models/task.model.';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  @Input() public taskList: Task[] = [];
  @Input() public taskStatuses: TaskStatus[] = [];
  @Input() public isAddListClicked: boolean = false;
  @Output() public addItemToListButtonClicked = new EventEmitter();
  @Output() public addCardClicked = new EventEmitter<string>();
  @Output() public addCardTolist = new EventEmitter<{
    name: string;
    status: string;
  }>();
  @Output() public addItemToList = new EventEmitter<string>();
  @Output() public cancelClicked = new EventEmitter();
  @Output() public cancelAddCardClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
