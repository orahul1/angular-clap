import { TestBed } from '@angular/core/testing';

import { AngClapService } from './ang-clap.service';

describe('AngClapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngClapService = TestBed.get(AngClapService);
    expect(service).toBeTruthy();
  });
});
