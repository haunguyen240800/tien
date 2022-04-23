import { PopupProductComponent } from './../popup/popup-product/popup-product.component';
import { PopupCartComponent } from './../popup/popup-cart/popup-cart.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScriptLoaderService } from 'src/app/service/load-script.service';
declare var $: any;
declare var noUiSlider: any;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  openPopupProduct: boolean = true;
  constructor(
    private loadJsService: ScriptLoaderService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadJsService.loadJsFilter();
    this.loadJsService.loadJsSort();
  }

  onOpenPopupProduct(){
    if (this.openPopupProduct){
      this.openPopupProduct = false;
      $('body').addClass("overlay custom-popup");
      const dialogRef = this.dialog.open(PopupProductComponent,{
        data: {
        },
      });

      dialogRef.afterClosed().subscribe(
        result => {
            this.openPopupProduct = true;
            $('body').removeClass("overlay custom-popup");
        }
    )

    }
  }
}
