/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeLogService } from './change-log.service';

describe('Service: ChangeLog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLogService]
    });
  });

  it('should ...', inject([ChangeLogService], (service: ChangeLogService) => {
    expect(service).toBeTruthy();
  }));
});
