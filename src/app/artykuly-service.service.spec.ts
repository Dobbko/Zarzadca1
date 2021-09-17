import { TestBed } from '@angular/core/testing';

import { ArtykulyServiceService } from './artykuly-service.service';

describe('ArtykulyServiceService', () => {
  let service: ArtykulyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtykulyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
