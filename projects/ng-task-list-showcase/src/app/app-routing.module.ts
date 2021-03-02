import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDashboardComponent } from 'ng-task-list';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'task-dashboard',
    // canActivate: [AuthGuard],
    component: TaskDashboardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
