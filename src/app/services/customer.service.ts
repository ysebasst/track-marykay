import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ICustomer } from 'src/types/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  API_URL = 'https://api-track-marykay.herokuapp.com';

  private customers: BehaviorSubject<ICustomer[]> = new BehaviorSubject<
    ICustomer[]
  >([]);
  customers$ = this.customers.asObservable();
  setCustomers(data: ICustomer[] | any) {
    this.customers.next(data);
  }
  deleteCustomer(customerId: any) {
    this.setCustomers(
      this.customers
        .getValue()
        .filter((customer) => customer._id !== customerId)
    );
  }

  headers = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.API_URL}/api/customers`, this.headers);
  }

  get(id: string) {
    return this.http.get(`${this.API_URL}/api/customers/${id}`, this.headers);
  }

  create(customer: ICustomer) {
    return this.http.post(
      `${this.API_URL}/api/customers`,
      customer,
      this.headers
    );
  }

  update(customer: ICustomer) {
    return this.http.put(
      `${this.API_URL}/api/customers/${customer._id}`,
      customer,
      this.headers
    );
  }

  delete(customer: ICustomer) {
    return this.http.delete(
      `${this.API_URL}/api/customers/${customer._id}`,
      this.headers
    );
  }
}
