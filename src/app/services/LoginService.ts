import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/roleEnum';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth/login'; // URL du backend
  roles: any;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password });
  }
  private mapRoles(rolesFromBackend: string[]): Role[] {
    return rolesFromBackend
      .map((role) => role as unknown as Role)
      .filter((role) => Object.values(Role).includes(role));
  }
  // Vérifier si l'utilisateur est un Dentiste
  isParent(): boolean {
    return this.roles.includes(Role.ROLE_PARENT);
  }
  //  Vérifier si l'utilisateur est un Patient
  isChildEducator(): boolean {
    return this.roles.includes(Role.ROLE_CHILDEDUCATOR);
  }

  
}
