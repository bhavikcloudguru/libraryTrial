// Angular imports
import { Component, OnDestroy } from '@angular/core';
// Rxjs imports
import { Subscription } from 'rxjs';
// other imports
import { Task, TaskStatus } from '../models/task.model.';
import { TaskService } from '../services/task.service';

@Component({
  selector: '',
  templateUrl: './task-dashboard.component.html',
})
export class TaskDashboardComponent implements OnDestroy {
  public taskList: Task[] = [];
  public taskStatuses: TaskStatus[] = [];
  public subscriptionArray: Subscription[] = [];
  public isAddListClicked = false;
  public listExistsError = false;

  constructor(private taskService: TaskService) {
    // Subscriptions
    this.subscriptionArray.push(
      this.taskService.$getTaskList.subscribe((tasks) => {
        this.taskList = [...tasks];
      })
    );
    this.subscriptionArray.push(
      this.taskService.$getTaskStatusList.subscribe((statuses) => {
        this.taskStatuses = [...statuses];
      })
    );
  }

  /**
   * Add Item to list button clicked
   */
  public addItemToListButtonClicked(): void {
    this.isAddListClicked = true;
  }

  /**
   *
   * @param value list name to be added in task group
   */
  public addItemToList(label: string): void {
    if (label) {
      let name = label.toUpperCase().split(' ').join('_');
      let taskGroupToBeAdded = {
        name,
        label: label,
        showAddCardForm: false,
      };
      let listFound = this.taskService.checkIfStatusExists(name);
      if (listFound) {
        this.listExistsError = true;
      } else {
        this.listExistsError = false;
        this.taskService.updateTaskStatus(taskGroupToBeAdded);
      }
      this.isAddListClicked = false;
    }
  }

  /**
   *
   * @param groupName: name of group to which card will be added
   */
  public addCardClicked(groupName: string): void {
    this.changeAddCardFormState(groupName);
  }

  /**
   *
   * @param cardData: cardData filled by user on add card form
   */
  public addCardTolist(cardData: { name: string; status: string }): void {
    if (cardData) {
      let itemToBeAdded: Task = {
        id: this.uniqueStringForId(9),
        name: cardData?.name,
        status: cardData?.status
      };
      this.taskService.updateTaskList(itemToBeAdded);
    }
    this.changeAddCardFormState(cardData.status);
  }

  /**
   * Hide add list form on click on cancel button
   */
  public cancelClicked() {
    this.isAddListClicked = false;
  }

  /**
   *
   * @param status: toggle flag for group name
   */
  public cancelAddCardClicked(status: string): void {
    this.changeAddCardFormState(status);
  }
  /**
   *
   * @param groupName : updating flag for showAddCardForm for given group name
   */
  private changeAddCardFormState(groupName: string): void {
    this.taskStatuses.map((group) =>
      group.name === groupName
        ? (group.showAddCardForm = !group.showAddCardForm)
        : group
    );
  }

  /**
   *
   * @param length : stringLength to ve returned for unique string for id
   */
  private uniqueStringForId(length: number) {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, length);
  }

  // On Destory method to remove subscription
  ngOnDestroy() {
    if (this.subscriptionArray.length) {
      this.subscriptionArray.forEach((subscription) =>
        subscription.unsubscribe()
      );
    }
  }
}
