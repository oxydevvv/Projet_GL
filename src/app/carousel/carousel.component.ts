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

    const prevButton = document.getElementById('prev-button') as HTMLButtonElement;
    const nextButton = document.getElementById('next-button') as HTMLButtonElement;

    console.log(prevButton);
    console.log(nextButton);

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
