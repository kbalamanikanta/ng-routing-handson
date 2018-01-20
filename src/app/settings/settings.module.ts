import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  },
  {
    path: 'account-settings',
    component: AccountSettingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsComponent, AccountSettingComponent]
})
export class SettingsModule { }
