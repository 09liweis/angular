import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [
    trigger('newsAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('0.3s ease', keyframes([
            style({opacity: 0, transform: 'translateX(-20%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(20px)', offset: 0.5}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {
  
  news: Array<News>;

  constructor(
    private newsService: NewsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.newsService.getNewsFromRottentomatoes()
      .then(news => {
        this.news = news;
        this.titleService.setTitle('Movie Paradise - News');
      });
  }

}
