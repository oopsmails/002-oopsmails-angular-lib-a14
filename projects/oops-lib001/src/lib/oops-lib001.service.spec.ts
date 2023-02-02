import { TestBed } from '@angular/core/testing';

import { OopsLib001Service } from './oops-lib001.service';

describe('OopsLib001Service', () => {
  let service: OopsLib001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OopsLib001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
