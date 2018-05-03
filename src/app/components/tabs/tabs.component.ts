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

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }
  
  formatTitle(title: string): string {
    return this.utilsService.formatTitle(title);
  }

}
