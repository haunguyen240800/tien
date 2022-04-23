import { Component, OnInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScriptSlider();
  }

  loadScriptSlider(){
    new Swiper('.testimonial-slider--three', {
      loop: true,
      loopFillGroupWithBlank: true,
      autoHeight: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ' .swiper-button--next',
        prevEl: ' .swiper-button--prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
    
  }
}
