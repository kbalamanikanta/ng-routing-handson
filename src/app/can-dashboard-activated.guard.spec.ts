import { TestBed, async, inject } from '@angular/core/testing';

import { CanDashboardActivatedGuard } from './can-dashboard-activated.guard';

describe('CanDashboardActivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDashboardActivatedGuard]
    });
  });

  it('should ...', inject([CanDashboardActivatedGuard], (guard: CanDashboardActivatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
