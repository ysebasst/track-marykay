import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/types/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<ICustomer[]>;
  searchText = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customers$ = customerService.customers$;
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe((customers) => {
      this.customerService.setCustomers(customers);
    });
  }

  redirectToDetail(event: any, customer: ICustomer) {
    if (event.target.localName !== 'button') {
      this.router.navigate([`/customers/${customer._id}`]);
    }
  }

  deleteCustomer(customer: ICustomer) {
    if (confirm('¿Estas seguro de querer eliminar el cliente?')) {
      this.customerService.delete(customer).subscribe((response: ICustomer) => {
        console.log(response);
        this.customerService.deleteCustomer(response._id);
      });
    }
  }
}
