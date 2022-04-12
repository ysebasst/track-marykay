import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ContactTime, Gender, ICustomer } from 'src/types/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  id: string;
  customer: ICustomer = {};
  genders = Object.values(Gender);
  contactTime = Object.values(ContactTime);

  title: string;
  textButton: string;
  isEditing: boolean;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.customer = {
      name: '',
      date_of_birth: '',
      gender: this.genders[0],
      email: '',
      phone_number: '',
      contact_time: this.contactTime[0],
      city: '',
      address: '',
    };
    this.title = this.id ? 'Editar cliente' : 'Nuevo cliente';
    this.textButton = this.id ? 'Editar cliente' : 'Crear cliente';
    this.isEditing = this.id ? true : false;
  }

  ngOnInit(): void {
    if (this.id) {
      this.customerService.get(this.id).subscribe((reponse) => {
        this.customer = reponse;
      });
    }
  }

  onSubmit(form: NgForm) {
    this.customer = { ...this.customer, ...form.value };
    if (this.isEditing) {
      this.customerService.update(this.customer).subscribe((response) => {
        this.router.navigate(['/customers']);
      });
    } else {
      this.customerService.create(this.customer).subscribe((response) => {
        this.router.navigate(['/customers']);
      });
    }
  }
}
