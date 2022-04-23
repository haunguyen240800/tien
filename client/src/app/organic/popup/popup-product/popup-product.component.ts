import { ScriptLoaderService } from 'src/app/service/load-script.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-popup-product',
  templateUrl: './popup-product.component.html',
  styleUrls: ['./popup-product.component.css']
})
export class PopupProductComponent implements OnInit {

  constructor(
    private loadJsService: ScriptLoaderService,
    public dialogRef: MatDialogRef<PopupProductComponent>,
      @Inject(MAT_DIALOG_DATA)public data: any
  ) { }

  ngOnInit(): void {
    this.loadJsService.galleryItemsSlide();
  }

  onClose(): any {
    this.dialogRef.close();
  }
}
