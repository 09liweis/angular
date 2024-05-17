import { Component,Inject, Injectable, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})

export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = "world";
  map: mapboxgl.Map | undefined;
  lat: number = 30.2672;
  lng: number = -97.7431;
  ngOnInit() {
    if (typeof document == "undefined") {
      return;
    }
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      this.lng = longitude;
      this.lat = latitude;
      this.initMap();
    })
    
  }
  initMap() {
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2FtbGl3ZWlzZW4iLCJhIjoiY2twZWR6ZzZyMDZtbTJybzJsbWxoYW1sOCJ9.lhs_TcMlrQEiKk6LAGxo2A',
      container: 'main',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
}
