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
}
