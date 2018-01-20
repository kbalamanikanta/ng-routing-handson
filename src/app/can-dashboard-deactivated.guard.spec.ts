import { TestBed, async, inject } from '@angular/core/testing';

import { CanDashboardDeactivatedGuard } from './can-dashboard-deactivated.guard';

describe('CanDashboardDeactivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDashboardDeactivatedGuard]
    });
  });

  it('should ...', inject([CanDashboardDeactivatedGuard], (guard: CanDashboardDeactivatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
