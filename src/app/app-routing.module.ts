import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },  // default route to department path
  { path: 'departments', component: DepartmentListComponent }, 
  { path: 'employees', component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }, // any invalid path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
