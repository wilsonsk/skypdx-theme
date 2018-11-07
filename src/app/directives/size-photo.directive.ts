import { OnInit, Directive, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';

import { State } from '../models/state.model';
import { StateService } from '../services/state.service';

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
  state: State;
  private stateChangedSubscription: Subscription;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.state = this.stateService.getState();
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
    });
    this.getWidthClass();
  }

  getWidthClass() {
    if(this.state.browserIsLg) {
      // const widthSelector = Math.floor(Math.random() * this.widthClasses.length);
      //
      // switch(this.widthClasses[widthSelector]) {
      //   case 'photo-grid__frame--width-1':
      //     this.w4 = true;
      //     break;
      //   case 'photo-grid__frame--width-2':
      //     this.w3 = true;
      //     break;
      //   case 'photo-grid__frame--width-3':
      //     this.w3 = true;
      //     break;
      //   case 'photo-grid__frame--width-4':
      //     this.w4 = true;
      //     break;
      // }
      this.w3 = true;

    } else {
      this.w3 = true;
    }



  }
}
