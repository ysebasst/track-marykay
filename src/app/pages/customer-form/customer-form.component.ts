import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ContactTime, Gender, ICustomer } from 'src/types/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customer: ICustomer = {};
  genders = Object.values(Gender);
  contactTime = Object.values(ContactTime);
  initialGender = this.genders[0];
  initialContactTime = this.contactTime[0];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    // this.customer = form.value;
    // console.log(this.customer);
    // this.customerService.create(this.customer).subscribe((response) => {
    //   console.log(response);
    //   this.router.navigate(['/customers']);
    // });
  }
}
