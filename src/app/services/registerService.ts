import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/auth/register'; // URL du backend
  constructor(private http: HttpClient) {}

  register(
    registerDto:Register
  ): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? token : ''
    });

    return this.http.post<any>(this.apiUrl,
      registerDto
    ,{headers, responseType: 'text/plain' as 'json'});
  }






  }

