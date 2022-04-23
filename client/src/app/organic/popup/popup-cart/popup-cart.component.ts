import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-cart',
  templateUrl: './popup-cart.component.html',
  styleUrls: ['./popup-cart.component.css']
})
export class PopupCartComponent implements OnInit {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<PopupCartComponent>,
      @Inject(MAT_DIALOG_DATA)public data: any

  ) { }

  ngOnInit(): void {
  }

  onClose(): any {
    this.dialogRef.close();
  }

  navigateCheckout(){
    this.dialogRef.close();
    this.router.navigateByUrl("/origanic/checkout");
    
  }

  navigateCart(){
    this.dialogRef.close();
    this.router.navigateByUrl("/origanic/cart");
  }
}
