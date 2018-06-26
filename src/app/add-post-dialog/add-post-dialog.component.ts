import { AddPostConfirmDialogComponent } from './../add-post-confirm-dialog/add-post-confirm-dialog.component';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {

  title:string;
  tags=['JavaScript','Angular','Angular Material'];
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    
  }
  doPost(){
    this.dialog.open(AddPostConfirmDialogComponent,{
      data:{
      title: this.title
    }});
  }
  removeTag(tagName) {
    console.log(tagName);
    this.tags = this.tags.filter(tag => tag !== tagName);
  }
  separatorKeysCodes = [ENTER, COMMA];
  
  addTag($event: MatChipInputEvent) {
    if (($event.value || '').trim()) {
      const value = $event.value.trim();
      if (this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
    }

    $event.input.value = '';
  }
}
