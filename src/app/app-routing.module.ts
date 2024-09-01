import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';
import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'navbar', component: HomepageNavbarComponent},
  { path: 'loginPage', component: UserLoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }