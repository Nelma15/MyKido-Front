import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/Login.component';
import { RegisterComponent } from './register/register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'register',component: RegisterComponent}
    
];
