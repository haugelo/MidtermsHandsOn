import { TestBed } from '@angular/core/testing';

import { PassarrayService } from './passarray.service';

describe('PassarrayService', () => {
  let service: PassarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
