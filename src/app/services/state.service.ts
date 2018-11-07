import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  stateChanged = new Subject<any>();
  state: State;

  constructor() {
    this.initState();
  }

  public initState() {
    this.state = new State(
      true,
      false,
      null,
      false,
      false,
      false,
      false,

      false,

      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    )
    let stateCopy: State = Object.assign({}, this.state);
    this.stateChanged.next(stateCopy);
  }

  getState() {
    let stateCopy: State = Object.assign({}, this.state);
    return stateCopy;
  }

  public setState(prop:string, val:any) {
    this.state[prop] = val;
    let stateCopy: State = Object.assign({}, this.state);
    this.stateChanged.next(stateCopy);
  }

  public setBrowserState(width:number) {
    if(width != null) {
      if(width < 768) {
        // this.setState('gridIsOpen', true);

        this.resetBrowserWidth();
        this.setState('browserIsXs', true);

      } else if(width >= 768 && width < 992) {
        // this.setState('gridIsOpen', true);

        this.resetBrowserWidth();
        this.setState('browserIsSm', true);

      } else if(width >= 992 && width < 1200) {
        // this.setState('gridIsOpen', false);

        this.resetBrowserWidth();
        this.setState('browserIsMd', true);

      } else if(width >= 1200) {
        // this.setState('gridIsOpen', false);

        this.resetBrowserWidth();
        this.setState('browserIsLg', true);
      }
    }
  }

  private resetBrowserWidth() {
    if(this.state.browserIsXs) {
      this.setState('browserIsXs', false);
    }
    if(this.state.browserIsSm) {
      this.setState('browserIsSm', false);
    }
    if(this.state.browserIsMd) {
      this.setState('browserIsMd', false);
    }
    if(this.state.browserIsLg) {
      this.setState('browserIsLg', false);
    }
  }

  resetHighlight() {
    this.setState('highlightArchitecture', false);
    this.setState('highlightInteriorSpace', false);
    this.setState('highlightComposite', false);
    this.setState('highlightPortrait', false);
    this.setState('highlightProduct', false);
    this.setState('highlightAbout', false);
    this.setState('highlightContact', false);
    this.setState('highlightMyGear', false);
  }
}
