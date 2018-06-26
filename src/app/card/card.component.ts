import { AddPostDialogComponent } from './../add-post-dialog/add-post-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  posts$:Observable<any>;
  constructor(private httpClient:HttpClient,public dialog:MatDialog) { 
    
  }
  process:number;
  width:number;
  diameter:number;
  ngOnInit() {
    this.posts$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(posts=>{
      return posts.slice(0, 6);
    }));
    this.dialog.afterAllClosed.subscribe(() => {
      console.log('目前已經沒有dialog了');
    });
    
    this.dialog.afterOpen.subscribe((dialogRef: MatDialogRef<any>) => {
      console.log(`新的dialog已開啟：${dialogRef.id}`);
      console.log(`目前已開啟 ${this.dialog.openDialogs.length} 個dialog了`);
    });
    this.process=70;
    this.width=5;
    this.diameter=50;
  }
  addProcess(){
     this.process+=10;
  }
  minusProcess(){
    this.process-=10;
  }
  addWidth(){
    this.width+=1;

  }
  minusWidth(){
    this.width-=1;

  }
  addDiameter(){
    this.diameter+=50;
  }
  minusDiameter(){
    this.diameter-=50;
  }
  showAddPostDialog(){
    this.dialog.open(AddPostDialogComponent);
  }

}
