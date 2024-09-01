import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';
import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { LandingPageComponent } from './user-landing-page/landing-page.component';
import { GeneralLandingPageComponent } from './general-landing-page/general-landing-page.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'landingPage', component: LandingPageComponent},
  { path: 'adduser', component: UserFormComponent },
  { path: 'navbar', component: HomepageNavbarComponent},
  { path: 'loginPage', component: UserLoginPageComponent},
  { path: 'generalLandingPage', component: GeneralLandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }