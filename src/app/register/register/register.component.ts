import { Component } from '@angular/core';
import { RegisterService } from '../../services/registerService';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Adress } from '../../models/Adress';
import { Register } from '../../models/Register';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [NgClass,FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    form: any = {
      email: null,
      password: null,
      lastName: null,
      firstName: null,
      phone: null,
      role: 'ROLE_CHILDEDUCATOR',
      streetName: null,
      streetNumber: null,
      city: null,
      postalCode: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private registerService: RegisterService, private router:Router) { }

    onSubmit(): void {

      const {lastName, firstName, email, password, phone, role, streetName, streetNumber, city, postalCode } = this.form;
      const address = new Adress(streetName,streetNumber,city,postalCode);
      let register = new Register(lastName, firstName, email, password, phone,address, role);
      this.registerService.register(register).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }


  isParent() {
    return this.form.role !== 'ROLE_CHILDEDUCATOR';
  }
}
