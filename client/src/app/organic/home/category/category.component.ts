import { ScriptLoaderService } from 'src/app/service/load-script.service';
import { Component, OnInit } from '@angular/core';
declare var Swiper: any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private loadJsService: ScriptLoaderService
  ) { }

  ngOnInit(): void {
    this.loadJsService.categoryTopSliderTwo();
  }

}
