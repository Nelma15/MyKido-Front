import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'http://localhost:8080/api/activity'; 

    constructor(private http: HttpClient) {}
     getChildren(): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': token ? token : ''
        });
        return this.http.get('http://localhost:8080/api/child/childrens', { headers });
      }
}
