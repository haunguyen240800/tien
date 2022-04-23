import { ScriptLoaderService } from 'src/app/service/load-script.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private loadJsService: ScriptLoaderService) { }

  ngOnInit(): void {
    this.loadJsService.brandNameSlideOne();
    this.loadJsService.membersSliderOne();
  }

}
