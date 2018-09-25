import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './employee';
import { Observable } from 'rxjs';


@Injectable()
export class employeeService{

    private url : string = './employeeData.json';

    constructor(private http : HttpClient){}

    getEmployees() : Observable<employee[]>{
        return this.http.get<employee[]>(this.url,);
    }

}