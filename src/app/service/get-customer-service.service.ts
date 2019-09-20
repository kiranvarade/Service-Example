import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerServiceService {

  constructor(private http:HttpClient) { }
  api_url="https://www.w3schools.com/angular/customers.php";

 public getAllCustomers():Observable<any>{

   return this.http.get(this.api_url);
 }
}
