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
  gender = Gender;
  contactTime = ContactTime;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.customer = form.value;
    console.log(this.customer);
    this.customerService.create(this.customer).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/customers']);
    });
  }
}
