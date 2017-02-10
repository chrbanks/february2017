import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employees/shared/employee.service';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { EmployeeComponent } from './employees/employee/employee.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        EmployeesComponent,
        NewEmployeeComponent,
        EmployeeComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'employees', component: EmployeesComponent },
            { path: 'employees/new', component: NewEmployeeComponent },
            { path: 'employees/:id', component: EmployeeComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        FormsModule
    ],
    providers: [ EmployeeService ]
})
export class AppModule {
}
