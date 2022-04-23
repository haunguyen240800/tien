import { Component, OnInit } from '@angular/core';
declare var Swiper: any
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var bannerThree = new Swiper('.banner-slider--03', {
      spaceBetween: 15,
      loop: true,
      loopFillGroupWithBlank: true,
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}
