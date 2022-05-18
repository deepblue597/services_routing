import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListedComponent } from './components/employee-listed/employee-listed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {path: 'departments', component: DepartmentListComponent}, 
  {path: 'employees', component:EmployeeListedComponent}, 
  {path: 'departments/:id', component:DepartmentDetailsComponent}, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                  EmployeeListedComponent,
                                  PageNotFoundComponent, 
                                  DepartmentDetailsComponent]