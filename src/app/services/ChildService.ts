import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private apiUrl = 'http://localhost:8080/api/child'; 

  constructor(private http: HttpClient) {}

  // Récupérer la liste des enfants du parent connecté
  getChildren(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? token : ''
    });
    return this.http.get(`${this.apiUrl}/mychildren`, { headers });
  }

  //  Méthode pour récupérer le token de l'utilisateur connecté
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); //  Récupérer le Token JWT stocké
    return new HttpHeaders({
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    });
  }

}
