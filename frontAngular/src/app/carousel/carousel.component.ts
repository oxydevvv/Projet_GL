import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ApiService]
})
export class CarouselComponent{
  pizzas = [{nom: 'pizza', short_description: 'description', price:10, picture: 'url'}]
  query = '';
  pizzasBis = [{fields: [{nom: 'pizza', short_description: 'description', price:10, picture: 'url'}]}]
  elementsPaniers= [{nom: 'pizza',price:0,quantite:1,prixtotalligne:0}]
  prixTotal = 0;
  
  constructor(private apiService: ApiService) {
    this.getPizzas();
    this.search();
  }
  viderPanier(){
    this.elementsPaniers = [{nom: ' pizza',price:0,quantite:1,prixtotalligne:0}];
    this.prixTotal = 0;
  }
  passerCommande(){

  }
  ajouterPanier(nomPizza: string, price: number) {
    if(this.elementsPaniers[0].nom === 'pizza'){
      this.elementsPaniers.splice(0, 1);
    }
    let pizzaExisteDeja = false;
    for (let i = 0; i < this.elementsPaniers.length; i++) {
      if (this.elementsPaniers[i].nom === nomPizza) {
        // Incrémentez la quantité de l'élément du panier
        this.elementsPaniers[i].quantite++;
        this.elementsPaniers[i].prixtotalligne = this.elementsPaniers[i].quantite * this.elementsPaniers[i].price;
        pizzaExisteDeja = true;
        break;
      }
    }
    //fonction qui parcourt la liste des pizzas et qui ajoute le prix de tous les pizza au prix total
    this.prixTotal = 0;
    for (let i = 0; i < this.elementsPaniers.length; i++) {
      this.prixTotal += this.elementsPaniers[i].prixtotalligne;
    }
  
    // Si la pizza n'est pas déjà dans le panier, ajoutez-la
    if (!pizzaExisteDeja) {
      this.elementsPaniers.push({nom: nomPizza,price: price,quantite:1,prixtotalligne:price});
    }
    }
  supprimer(nomPizza: string) {
    for (let i = 0; i < this.elementsPaniers.length; i++) {
      if (this.elementsPaniers[i].nom === nomPizza) {
        // decrementet la quantité de l'élément du panier
        this.elementsPaniers[i].quantite--;
        this.elementsPaniers[i].prixtotalligne = this.elementsPaniers[i].quantite * this.elementsPaniers[i].price;
        this.prixTotal -= this.elementsPaniers[i].price;
        if(this.elementsPaniers[i].quantite === 0){
          this.elementsPaniers.splice(i, 1);
        }
        break;
      }
    }
  }
  search() {
    if (this.query!='') {
      this.apiService.searchPizza(this.query).subscribe({
        next: data => {
          this.pizzas = []
          for (let i = 0; i < data.length; i++) {
            this.pizzas.push(data[i].fields);
          }
          console.log(this.pizzas);
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  clear() {
    this.query = '';
    this.getPizzas();
  }
  getPizzas() {
    if (this.query=='') {
    this.apiService.getAllPizzas().subscribe({
      next: data => {
        this.pizzas = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }}
  ngOnInit() {
    /*
    const prevButton = document.getElementById('prev-button') as HTMLButtonElement;
    const nextButton = document.getElementById('next-button') as HTMLButtonElement;

    console.log(prevButton);
    console.log(nextButton);
    /*
    function scroll(direction : number)
    {
      this.currentPosition += direction*500;
    
      if(this.carouselContainer)
      {
        this.carouselContainer.nativeElement.styme.transform="translateX("+this.currentPosition+"px)";
      }
    }

    /*
    if ('id' in prevButton) {
      console.log("a");
      this.prevButton.nativeElement.addEventListener('click', () => {
        this.currentPosition -= 500;
        if(this.carouselContainer)
        {
          this.carouselContainer.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
        }
      });
    }
    else
    {
      console.log("b");
    }

    if(typeof nextButton !== 'undefined')
    {
      this.nextButton.nativeElement.addEventListener('click', () => {
        this.currentPosition += 500;
        if(this.carouselContainer)
        {
          this.carouselContainer.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
        }
      });
    }
    */
  }
}
