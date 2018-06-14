import { Component, OnInit, Input, HostListener } from '@angular/core';

import { MovieImage } from '../../models/movieImage';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: MovieImage;
  modalOpen: boolean = false;
  currentImage: any = 0;

  constructor() { }

  ngOnInit() {
  }
  
  previewImage(image, index) {
    this.currentImage = index;
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key == 'ArrowRight') {
      if (this.currentImage == this.images.length - 1) {
        this.currentImage = 0
      } else {
        this.currentImage += 1;
      }
    }
    if (event.key == 'ArrowLeft') {
      if (this.currentImage == 0) {
        this.currentImage = this.images.length - 1;
      } else {
        this.currentImage -= 1;
      }
    }
  }

}
