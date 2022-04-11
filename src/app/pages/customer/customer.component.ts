import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/types/Customer';
import { getAge } from 'src/utils/date';

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
    this.customerService.get(this.id).subscribe((response: any) => {
      this.customer = {
        ...response,
        age: getAge(response.date_of_birth),
      };
    });
  }
}
