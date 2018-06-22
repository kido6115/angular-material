import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {
  mode = new FormControl('over');
  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
    });
  }
  open(){
    alert('isOpened');
  }
  close(){
    alert('isClosed');

  }
  constructor() { }

  ngOnInit() {
  }

}
