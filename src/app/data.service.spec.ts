import { TestBed } from '@angular/core/testing';

import { ProfileDetails } from './data.service';

describe('ProfileDetails', () => {
  let service: ProfileDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
