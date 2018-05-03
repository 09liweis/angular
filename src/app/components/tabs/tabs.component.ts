import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() links: Array<string>;
  @Input() currentLink: string; 

  constructor() { }

  ngOnInit() {
  }

}
