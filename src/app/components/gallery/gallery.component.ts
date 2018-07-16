import { Component, OnInit, Input, HostListener } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('galleryAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-35%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
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
