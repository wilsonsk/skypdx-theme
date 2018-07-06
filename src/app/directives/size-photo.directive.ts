import { OnInit, Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSizePhoto]'
})
export class SizePhotoDirective implements OnInit {
  @HostBinding('class.photo-grid__frame--width-1') w1: boolean = false;
  @HostBinding('class.photo-grid__frame--width-2') w2: boolean = false;
  @HostBinding('class.photo-grid__frame--width-3') w3: boolean = false;
  @HostBinding('class.photo-grid__frame--width-4') w4: boolean = false;

  widthClasses = [
    'photo-grid__frame--width-1', 'photo-grid__frame--width-2', 'photo-grid__frame--width-3', 'photo-grid__frame--width-4'
  ];

  constructor() { }

  ngOnInit() {
    this.getWidthClass();
  }

  getWidthClass() {
    const widthSelector = Math.floor(Math.random() * this.widthClasses.length);

    // switch(this.widthClasses[widthSelector]) {
    //   case 'photo-grid__frame--width-1':
    //     this.w1 = true;
    //     break;
    //   case 'photo-grid__frame--width-2':
    //     this.w2 = true;
    //     break;
    //   case 'photo-grid__frame--width-3':
    //     this.w3 = true;
    //     break;
    //   case 'photo-grid__frame--width-4':
    //     this.w4 = true;
    //     break;
    // }

    this.w3 = true;

  }
}
