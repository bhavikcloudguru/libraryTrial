import { Component, Input, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCardComponent implements OnInit {
  @Output() addCardTolist = new EventEmitter<string>();
  @Output() cancelAddCardClicked = new EventEmitter();

  public addCardForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  public addCard(): void {
    let cardName = this.addCardForm.controls['name'].value;
    if (cardName.length > 0) {
      this.addCardTolist.emit(cardName);
      this.addCardForm.reset();
    }
  }
}
