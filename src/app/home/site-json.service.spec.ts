/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiteJsonService } from './site-json.service';

describe('SiteJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteJsonService]
    });
  });

  it('should ...', inject([SiteJsonService], (service: SiteJsonService) => {
    expect(service).toBeTruthy();
  }));
});
