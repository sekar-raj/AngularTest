import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloFormComponent, HiComponent, TestComponent } from './hello/hello.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { TestCanActivate } from './canactivate';
import { TestCanActivateChild } from './canactivateChild';

const routes: Routes = [{
  path: 'users',
  component: UsersComponent,
  children: [
    {path: 'hellochild',
    component: HiComponent}
  ],
  canActivate: [TestCanActivate],
  canActivateChild: [TestCanActivateChild]
}, 
{
  path: 'users/add',
  component: UserComponent
},
{
  path: 'users/:id',
  component: UserComponent
},
// {
//   path: '',
//   redirectTo: 'hello',
//   pathMatch: 'full'
// },
// {
//   path: '**',
//   redirectTo: 'test'

// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
