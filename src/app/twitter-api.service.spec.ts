import { TestBed } from '@angular/core/testing';

import { TwitterApiService } from './twitter-api.service';

describe('TwitterApiService', () => {
  let service: TwitterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
