import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { CreateUserComponent } from './createUser/create.component';
import { ViewAllUserComponent } from './viewUsers/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/create', pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent },
  { path: 'view', component: ViewAllUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModuleRoutingModule {}
