import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
    selector: 'new-employee',
    templateUrl: './new-employee.component.html'
})
export class NewEmployeeComponent {
    employee: Employee = new Employee();

    constructor(
        private employeeService: EmployeeService,
        private router: Router
    ) { }

    onSubmit() {
        this.employeeService.create(
            this.employee.firstName.trim(),
            this.employee.lastName.trim(),
            this.employee.title.trim(),
            this.employee.email.trim()
        ).then(() => this.router.navigate(['/employees']));
    }
}