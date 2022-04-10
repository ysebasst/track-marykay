import { Component, OnInit } from '@angular/core';
import { Router, UrlTree, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/types/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer: ICustomer = {};
  id: string;

  constructor(
    private customerService: CustomerService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.customerService.get(this.id).subscribe((response) => {
      this.customer = response;
    });
  }
}
