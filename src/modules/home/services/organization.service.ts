import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OrganizationService {

  constructor( private http: HttpClient) { }
  get(){
        return this.http.get("http://localhost:5000/api/expenseentry/41255/configuration");
  }
   
}