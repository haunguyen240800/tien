import { PopupCartComponent } from './../../popup/popup-cart/popup-cart.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openPopupCart: boolean = true;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onOpenPopupCart(){
    if (this.openPopupCart){
      this.openPopupCart = false;
      $('body').addClass("overlay custom-popup");
      const dialogRef = this.dialog.open(PopupCartComponent,{
        data: {
        },
      });

      dialogRef.afterClosed().subscribe(
        result => {
            this.openPopupCart = true;
            $('body').removeClass("overlay custom-popup");
        }
    )

    }
  }
}
