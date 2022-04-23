import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedcrumbComponent } from './breedcrumb.component';

describe('BreedcrumbComponent', () => {
  let component: BreedcrumbComponent;
  let fixture: ComponentFixture<BreedcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
