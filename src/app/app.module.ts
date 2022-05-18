import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component' ; 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
