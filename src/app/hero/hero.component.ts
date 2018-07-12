import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateService } from '../services/state.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  private stateChangedSubscription: Subscription;

  state: State;

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.state = this.stateService.getState();
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
    });
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

}
