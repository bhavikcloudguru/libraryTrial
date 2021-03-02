import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-list-form',
  templateUrl: './add-list-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddListFormComponent implements OnInit {
  @Output() public addItemToList = new EventEmitter<string>();
  @Output() public cancelClicked = new EventEmitter();

  public createListItemForm = new FormGroup({
    listname: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  public addlistItemClicked() {
    let listName = this.createListItemForm.controls['listname'].value;
    if (listName.length > 0) {
      this.addItemToList.emit(listName);
      this.createListItemForm.reset();
    }
  }
}
