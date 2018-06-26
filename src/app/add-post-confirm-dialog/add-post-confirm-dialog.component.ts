import { CustomeSnackBarComponent } from './../custome-snack-bar/custome-snack-bar.component';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-post-confirm-dialog',
  templateUrl: './add-post-confirm-dialog.component.html',
  styleUrls: ['./add-post-confirm-dialog.component.css']
})
export class AddPostConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private dialog:MatDialog,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  confirm(){
    this.dialog.closeAll();
    this.snackBar.open('已新增部落格文章','我知道了');
  }
  confirm2(){
    this.dialog.closeAll();
    this.snackBar.openFromComponent(CustomeSnackBarComponent,{data:{title:this.data.title}});
  }
  get title(){
    return this.data.title;
  }

}
