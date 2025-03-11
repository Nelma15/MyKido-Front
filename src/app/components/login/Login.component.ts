
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/LoginService';



@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './Login.component.html',
  
  styleUrl: './Login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };


  errorMessage: string = '';

  constructor(private loginService: LoginService) {}

  onSubmit(e:any)  {

    this.loginService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Connexion réussie :', response);
        localStorage.setItem('token', 'Bearer '+response.accessToken); // Stockage du token
      },
      error: (err) => {
        this.errorMessage = "Email ou mot de passe incorrect";
      }
    });

  
  }

}
