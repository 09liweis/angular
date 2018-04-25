import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }
  
  //need to find out string vs String
  formatTitle(title: string): string {
      //formate 'now_playing' to 'Noew Playing'
      return title.split('_').map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
  }
  getImagePath(file: string): string {
    if (file) {
      return 'https://image.tmdb.org/t/p/w500' + path;
    } else {
      return 'https://netbranding.co.nz/wp-content/uploads/2014/04/avatar-2.png';
    }
  }

}
