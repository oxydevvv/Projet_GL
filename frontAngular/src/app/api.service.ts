import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get(this.baseurl + '/clients/',
    {headers: this.httpHeaders});
    
  }
  getAllPizzas(): Observable<any> {
    return this.http.get(this.baseurl + '/pizzas/',
    {headers: this.httpHeaders});
  }
  login(_email: string, _motDePasse: string) {
    const body = {
      email: _email, 
      motDePasse: _motDePasse
    };
    this.http.post(this.baseurl + '/login/', body).subscribe({
      next: reponse => {
        console.log("la reponse "+reponse);
      },
      error: error => {
        console.log("erreur "+error);
      }
    });
  }
}
