import { Component, OnInit, Input } from '@angular/core';
import { Router }   from '@angular/router';

import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() links: Array<string>;
  @Input() selectedLink: string;
  @Input() list: string; //movie or tv

  constructor(private utilsService: UtilsService, private router: Router) { }

  ngOnInit() {
    
  }
  
  gotoLink(link) {
    this.selectedLink = link;
    this.router.navigate([this.list + 's/' + link]); 
  }
}
