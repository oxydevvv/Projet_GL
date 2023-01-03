import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('carouselItem') carouselItem?: ElementRef<HTMLDivElement>;
  @ViewChild('prevButton') prevButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('nextButton') nextButton?: ElementRef<HTMLButtonElement>;

  currentPosition = 0;

  ngOnInit() {

    const prevbutton = document.getElementById('prev-button') as HTMLButtonElement;
    const nextbutton = document.getElementById('next-button') as HTMLButtonElement;


    if (this.prevButton) {
      this.prevButton.nativeElement.addEventListener('click', () => {
        this.currentPosition -= 500;
        if(this.carouselContainer)
        {
          this.carouselContainer.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
        }
      });
    }

    if(this.nextButton)
    {
      this.nextButton.nativeElement.addEventListener('click', () => {
        this.currentPosition += 500;
        if(this.carouselContainer)
        {
          this.carouselContainer.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
        }
      });
    }

  }
}
