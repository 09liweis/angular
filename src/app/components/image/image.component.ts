import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() path: String;
  @Input() alt: String;
  @Input() caption: String;
  constructor() { }

  ngOnInit() {
  }

}
