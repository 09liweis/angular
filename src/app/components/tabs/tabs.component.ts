import { Component, OnInit, Input } from '@angular/core';

import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() links: Array<string>;
  @Input() currentLink: string;
  @Input() list: string; //movie or tv

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }
  
  formatTitle(title: string): string {
    return this.utilsService.formatTitle(title);
  }

}
