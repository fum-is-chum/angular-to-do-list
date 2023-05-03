import { TestBed } from '@angular/core/testing';

import { ActivityDetailResolver } from './activity-detail.resolver';

describe('ActivityDetailResolver', () => {
  let resolver: ActivityDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ActivityDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
