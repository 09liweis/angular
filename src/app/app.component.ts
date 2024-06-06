import { Component,Inject, Injectable, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';

const API_KEY = 'pk.eyJ1Ijoic2FtbGl3ZWlzZW4iLCJhIjoiY2twZWR6ZzZyMDZtbTJybzJsbWxoYW1sOCJ9.lhs_TcMlrQEiKk6LAGxo2A';

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
  searchKeyword:string = '';
  map: mapboxgl.Map | undefined;
  lat: number = 30.2672;
  lng: number = -97.7431;
  markers:any[] = [];
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
      accessToken: API_KEY,
      container: 'main',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
  async getSearchAddress(search:string) {
    const sessionToken = '&session_token=0148440e-4094-4d51-88fe-ebe473b01bf6';
    const SEARCH_API = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?proximity=ip&access_token=${API_KEY}${sessionToken}&country=CA`;
    const response = await fetch(SEARCH_API);
    const json = await response.json();
    
    const bounds = new mapboxgl.LngLatBounds();
    if (json.features) {
      json.features.forEach((place: { center: number[]; }) => {
        const center:[number,number] = [place.center[0],place.center[1]];
        if (this.map) {
          const marker = new mapboxgl.Marker().setLngLat(center).addTo(this.map);
          this.markers.push(marker);
        }
        bounds.extend(center);
      });
      this.map?.fitBounds(bounds,{padding:50});
    }
  }

  handleAddressChanged(event:any) {
    this.searchKeyword = event.target.value;
    this.markers.forEach(marker => marker.remove());
    this.getSearchAddress(this.searchKeyword);
  }
}
