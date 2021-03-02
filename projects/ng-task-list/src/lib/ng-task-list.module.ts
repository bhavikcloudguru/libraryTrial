// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { TaskDashboardComponent } from './tasks/task-dashboard/task-dashboard.component';
import { TaskListComponent } from './tasks//task-dashboard/task-list/task-list.component';
import { TaskListItemComponent } from './tasks//task-dashboard/task-list/task-list-item/task-list-item.component';
// Pipes
import { FilterDataPipe } from './tasks//pipe/filter-data.pipe';
import { AddCardComponent } from './tasks//task-dashboard/task-list/add-card/add-card.component';
import { AddListFormComponent } from './tasks//task-dashboard/add-list-form/add-list-form.component';

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskListComponent,
    TaskListItemComponent,
    FilterDataPipe,
    AddCardComponent,
    AddListFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [FilterDataPipe],
  exports: [TaskDashboardComponent],
})
export class NgTaskListModule {}
