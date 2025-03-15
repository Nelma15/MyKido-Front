
import { Component } from '@angular/core';
import {CommonModule, NgClass, NgIf} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../services/LoginService';



@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,NgIf, ReactiveFormsModule, NgClass],
  templateUrl: './Login.component.html',

  styleUrl: './Login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  user = {
    email: '',
    password: ''
  };


  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit()  {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe({
        next: (response) => {
          console.log('Connexion réussie :', response);
          localStorage.setItem('token', 'Bearer ' + response.accessToken); // Stockage du token
        },
        error: (err) => {
          this.errorMessage = "Email ou mot de passe incorrect";
        }
      });
    }
    else {
      console.log('Formulaire invalide');
    }


  }

}
