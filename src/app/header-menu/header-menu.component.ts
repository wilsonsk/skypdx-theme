import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { state, trigger, transition, style, animate, keyframes } from '@angular/animations';

import { StateService } from '../services/state.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  animations: [
    trigger('heroAnimation', [
      transition('void => *', [
        // style({'transform': 'scale(0.9)', 'opacity': '0'}),
        style({'opacity': '0'}),
        animate('500ms 500ms')
      ]),
      transition('* => void', [
        animate(700, keyframes([
          style({ 'opacity': '0', offset: 0.2}),
        ]))
      ])
    ]),
    trigger('headerMenuFade', [
      transition('* => void', [
        animate('500ms', style({
          'opacity': '0'
        }))
      ])
    ]),
  ]
})
export class HeaderMenuComponent implements OnInit, OnDestroy {
  private stateChangedSubscription: Subscription;
  public fixHeader: boolean;

  state: State;
  @ViewChild('headerMenu') headerMenu: ElementRef;

  @HostListener("window:scroll", ['$event']) onWindowScroll($event) {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;

    if(verticalOffset > 0) {
      this.fixHeader = true;
    } else {
      this.fixHeader = false;
    }

    this.stateService.setState('didScroll', true);
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

  openPortfolio() {
    this.stateService.setState('gridIsOpen', true);
  }

  openMyGear() {
    this.stateService.setState('gridIsOpen', true);
  }

}
