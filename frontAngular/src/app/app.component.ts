import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  //client
  clients = [{prenom: 'mor'}];
  //login
  email='';
  motDePasse='';
  //pizza
  pizzas = [{nom: 'pizza'}];



  constructor(private apiService: ApiService) {
    this.getClients();
    this.getPizzas();
  }
  getPizzas() {
    this.apiService.getAllPizzas().subscribe({
      next: data => {
        this.pizzas = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  getClients() {
    this.apiService.getAllClients().subscribe({
      next: data => {
        this.clients = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  login() {
    this.apiService.login(this.email, this.motDePasse)
  }
}