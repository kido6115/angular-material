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
  constructor(private httpClient:HttpClient) { 
    
  }
  process:number;
  width:number;
  diameter:number;
  ngOnInit() {
    this.posts$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(posts=>{
      return posts.slice(0, 6);
    }));
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

}
