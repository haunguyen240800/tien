import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'src/app/service/load-script.service';
declare var Swiper: any
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(
    private loadJsService: ScriptLoaderService,
  ) { }

  ngOnInit(): void {
    this.loadJsService.bannerSlider03();
  }
}
