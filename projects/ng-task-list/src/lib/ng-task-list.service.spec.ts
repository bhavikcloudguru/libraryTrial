import { TestBed } from '@angular/core/testing';

import { NgTaskListService } from './ng-task-list.service';

describe('NgTaskListService', () => {
  let service: NgTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
