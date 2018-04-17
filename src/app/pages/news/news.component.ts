import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: []
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
