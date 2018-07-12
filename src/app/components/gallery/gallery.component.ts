import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images;
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
  previous() {
    if (this.currentImage == 0) {
      this.currentImage = this.images.length - 1;
    } else {
      this.currentImage -= 1;
    }
  }
  next() {
    if (this.currentImage == this.images.length - 1) {
      this.currentImage = 0
    } else {
      this.currentImage += 1;
    }
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowRight':
        this.next();
        break;
      case 'ArrowLeft':
        this.previous();
        break;
    }
  }
}
