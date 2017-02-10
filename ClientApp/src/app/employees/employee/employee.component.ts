import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
    @Input() employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe(employee => this.employee = employee);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.employeeService.update(this.employee)
            .then(() => this.goBack());
    }
}