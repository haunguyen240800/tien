import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BreedcrumbComponent } from './breedcrumb/breedcrumb.component';



@NgModule({
  declarations: [
    TestimonialComponent,
    BreedcrumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestimonialComponent,
    BreedcrumbComponent
  ]
})
export class ShareModule { }
