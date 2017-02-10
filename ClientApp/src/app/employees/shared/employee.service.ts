import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
    private employeesUrl = 'api/employees';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getEmployees(): Promise<Employee[]> {
        return this.http.get(this.employeesUrl)
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }

    getEmployee(id: number): Promise<Employee> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }

    create(firstName: string, lastName: string, title: string, email: string): Promise<Employee> {
        return this.http.post(this.employeesUrl, JSON.stringify({ firstName, lastName, title, email }), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }

    update(employee: Employee): Promise<Employee> {
        const url = `${this.employeesUrl}/${employee.id}`;
        return this.http.put(url, JSON.stringify(employee), { headers: this.headers })
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.employeesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}