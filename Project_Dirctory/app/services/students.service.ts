import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl = 'http://localhost:37223/api/Pets';

  constructor(private http: HttpClient) { }

  petPost(pet: any): Observable<any> {
    return this.http.post(this.baseUrl, pet);
  }
}
