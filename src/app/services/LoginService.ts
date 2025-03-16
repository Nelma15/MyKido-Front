import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/roleEnum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // URL du backend
  roles: any;

  constructor(private http: HttpClient,private router :Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password });
  }
  private mapRoles(rolesFromBackend: string[]): Role[] {
    return rolesFromBackend
      .map((role) => role as unknown as Role)
      .filter((role) => Object.values(Role).includes(role));
  }
  
  isParent(): boolean {
    return this.roles.includes(Role.ROLE_PARENT);
  }
 
  isChildEducator(): boolean {
    return this.roles.includes(Role.ROLE_CHILDEDUCATOR);
  }
 
  }
  

