import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable()
export class CanDashboardDeactivatedGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(component:DashboardComponent){
    //BUSINESS LOGIC
    console.log('CanDashboardDeactivatedGuard called...');
    return true;
  }
}
