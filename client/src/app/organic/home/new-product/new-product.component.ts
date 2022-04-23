import { Component, OnInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScriptSlider();
  }

  loadScriptSlider(){
    new Swiper('.newest-products-slider--one', {
      spaceBetween: 22,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }
}
