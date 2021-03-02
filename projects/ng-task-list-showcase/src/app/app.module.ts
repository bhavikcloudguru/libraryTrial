import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTaskListModule } from 'ng-task-list';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgTaskListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
