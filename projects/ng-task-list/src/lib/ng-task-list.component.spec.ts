import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTaskListComponent } from './ng-task-list.component';

describe('NgTaskListComponent', () => {
  let component: NgTaskListComponent;
  let fixture: ComponentFixture<NgTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
