import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TaskListComponent} from './task-list/task-list.component';
import {TaskInfoComponent} from './task-info/task-info.component';

const routes: Routes = [
    {path: '', component: TaskListComponent},
    {path: ':task', component: TaskInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
