import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';
import { state, trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Subscription } from 'rxjs';

import { StateService } from '../../services/state.service';
import { State } from '../../models/state.model';
import { PostsService } from '../../services/posts.service';
import { ComplementaryColorsService } from '../../services/complementary-colors.service';
import { ComplementaryColors } from '../../models/complementary-colors.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

 animations: [
   trigger('routeAnimation', [
     transition('void => *', [
       style({'transform': 'translateX(-100%)', 'opacity': '0'}),
       animate('750ms 2500ms')
     ]),
   ])
 ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  colors:ComplementaryColors;
  private postsLoadedSubscription: Subscription
  private stateChangedSubscription: Subscription;
  state: State;

  constructor(private complementaryColorsService: ComplementaryColorsService, private stateService: StateService, private postsService:PostsService) { }

  ngOnInit() {
    this.colors = this.complementaryColorsService.getComplementaryColors();
    this.state = this.stateService.getState();
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
    });
  }

  onChangeColors():void {
    this.colors = this.complementaryColorsService.getComplementaryColors();
  }

  onReturnToHero() {
    this.stateService.setState('gridIsOpen', false);
  }

  loadPostsByCategory():void {
    this.postsService.loadPostsByCategory();
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

}
