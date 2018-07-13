import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateService } from '../services/state.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {
  private stateChangedSubscription: Subscription;

  state: State;
  @ViewChild('headerMenu') headerMenu: ElementRef;

  @HostListener("window:scroll", ['$event']) onWindowScroll($event) {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
    this.stateService.setState('didScroll', true);

    if(verticalOffset > 0) {
      this.headerMenu.nativeElement.style.position = 'fixed';
    } else {
      this.headerMenu.nativeElement.style.position = 'relative';
    }
  }
  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.state = this.stateService.getState();
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
      if(this.state.didScroll) {
      }
    });
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

  test() {
    this.stateService.setState('gridIsOpen', true);
  }

}
