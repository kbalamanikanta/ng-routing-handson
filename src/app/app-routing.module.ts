import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsComponent } from './dashboard/products/products.component';
import { AccountComponent } from './dashboard/account/account.component';
import { ProductsModule } from './dashboard/products/products.module';
import { AccountModule } from './dashboard/account/account.module';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './dashboard/products/product-details/product-details.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { Footer1Module } from './footer1/footer1.module';
import { Footer2Module } from './footer2/footer2.module';
import { CanDashboardActivatedGuard } from './can-dashboard-activated.guard';
import { CanDashboardDeactivatedGuard } from './can-dashboard-deactivated.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: { pageTitle: 'Routing demo' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanDashboardActivatedGuard],
    canDeactivate: [CanDashboardDeactivatedGuard],
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  },
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },
  {
    path: 'footer1',
    component: Footer1Component,
    outlet: 'bottom'
  },
  {
    path: 'footer2',
    component: Footer2Component,
    outlet: 'bottom'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    LoginModule,
    SignUpModule,
    DashboardModule,
    ProductsModule,
    AccountModule,
    Footer1Module,
    Footer2Module,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent],
  providers: [CanDashboardActivatedGuard, CanDashboardDeactivatedGuard]
})
export class AppRoutingModule { }
