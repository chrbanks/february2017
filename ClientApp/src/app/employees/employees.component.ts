import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './shared/employee.service';
import { Employee } from './shared/employee.model';

@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    employees: Employee[];

    constructor(
        private router: Router,
        private employeeService: EmployeeService
    ) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this.employeeService.getEmployees().then(employees => this.employees = employees);
    }

    gotoDetails(employee: Employee): void {
        this.router.navigate(['/employees', employee.id]);
    }

    gotoNew(): void {
        this.router.navigate(['/employees/new']);
    }

    delete(employee: Employee): void {
        this.employeeService.delete(employee.id)
            .then(() => this.employees = this.employees.filter(e => e !== employee));
    }
}