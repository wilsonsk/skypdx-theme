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
      false,
      false,
      null,
      // false,
      // false,
      // false,
      // false
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
    // this.checkState();
  }

  // private checkState() {
  //   this.checkBrowserWidth();
  // }
  //
  // private checkBrowserWidth() {
  //   if(this.state.browserWidth != null) {
  //     if(this.state.browserWidth < 768) {
  //       this.resetBrowserWidth();
  //       alert('being viewd in xs');
  //
  //       this.setState('browserIsXs', true);
  //     } else if(this.state.browserWidth >= 768 && this.state.browserWidth < 992) {
  //       this.resetBrowserWidth();
  //       alert('being viewd in sm');
  //
  //       this.setState('browserIsSm', true);
  //     } else if(this.state.browserWidth >= 992 && this.state.browserWidth < 1200) {
  //       this.resetBrowserWidth();
  //       alert('being viewd in md');
  //
  //       this.setState('browserIsMd', true);
  //     } else if(this.state.browserWidth >= 1200) {
  //       this.resetBrowserWidth();
  //       alert('being viewd in lg');
  //
  //       this.setState('browserIsLg', true);
  //     }
  //   }
  // }

  private resetBrowserWidth() {
    // this.setState('browserIsXs', false);
    // this.setState('browserIsSm', false);
    // this.setState('browserIsMd', false);
    // this.setState('browserIsLg', false);
  }
}
