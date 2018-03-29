import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import {GithubComponent} from './github/github.component';
const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'admin',
    component : AdministrationComponent
  },
  {
    path : 'github',
    component : GithubComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
