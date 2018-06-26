import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-custome-snack-bar',
  templateUrl: './custome-snack-bar.component.html',
  styleUrls: ['./custome-snack-bar.component.css']
})
export class CustomeSnackBarComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,@Inject(MAT_SNACK_BAR_DATA)private snackBarData:any) { }
  closeSnackBar() {
    this.snackBar.dismiss();
  }
  get title(){
    return this.snackBarData.title;
  }
  ngOnInit() {
  }

}
