import { Component, OnInit } from '@angular/core';
import { GetCustomerServiceService } from '../service/get-customer-service.service';
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
private result;
  constructor(private ser:GetCustomerServiceService) { }

  ngOnInit() {
    this.getCustomers();
  }
public getCustomers(){
   this.ser.getAllCustomers().subscribe((posResp)=>{this.result=posResp},
                                         (err:HttpErrorResponse)=>{
                                           if(err.error instanceof Error) {
                                             alert("client side error");
                                           }else{
                                             alert("server side error");
                                           }
                                         } )

}
}
