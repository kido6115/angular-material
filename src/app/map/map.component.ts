import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'AGM Demo';
  lat: number = 24.1504536;
  lng: number = 120.68325279999999;
  zoomValue: number = 15;
  iconUrl: string = 'http://i.imgur.com/0TctIfY.png';
  isOpen: boolean = false;

  url='assets/chcg.json';
  public markerClick(e) {
    console.log(e);
    e.open();
    this.isOpen = true;
  }
  public getGeoJsonLayer() {
    return this.httpClient.get<any[]>(this.url).pipe(map(res => {
      return res 
  }));
}
geoJson: Object = null;

  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
    this.getGeoJsonLayer().subscribe(result=>{
      this.geoJson = result;
      console.log(result);
    });
  }

}
