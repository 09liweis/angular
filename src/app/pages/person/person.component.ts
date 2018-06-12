import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';

import { PersonService } from '../../services/person.service';

import { Cast } from '../../models/person/cast';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonPageComponent implements OnInit {
  public person;
  public images;
  public casts: Array<Cast>;
  public section: String;
  public sections: Array<any> = [
    {
      text: 'Home',
      link: 'home'
    },
    {
      text: 'Images',
      link: 'images'
    },
    {
      text: 'Casts',
      link: 'casts'
    }
  ]
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (typeof this.route.snapshot.params['section'] != 'undefined') {
      this.section = this.route.snapshot.params['section'];
    } else {
      this.section = 'home';
    }
    this.route.params.subscribe(params => {
      this.personService.getSection(+params['id'], 'images').subscribe(images => {
        this.images = images;
      })
      this.personService.getSection(+params['id'], '').subscribe(p => {
        this.person = p;
        this.titleService.setTitle(p.name);
      })
      this.personService.getSection(+params['id'], 'combined_credits').subscribe(credits => {
        // this.casts = credits.cast.sort((a, b) => {
        //   return new Date(b.release_date) - new Date(a.release_date);
        // });
        this.casts = credits.cast;
      })
    })
  }
  
  changeSection(section: string): void {
    this.section = section;
  }

}
