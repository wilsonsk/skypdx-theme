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
       animate('550ms 2500ms')
     ]),
   ])
 ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  colors:ComplementaryColors;
  private postsLoadedSubscription: Subscription
  private stateChangedSubscription: Subscription;
  state: State;
  highlightArchitecture: boolean = false;
  highlightInteriorSpace: boolean = false;
  highlightComposite: boolean = false;
  highlightPortrait: boolean = false;
  highlightProduct: boolean = false;

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

  resetHighlight() {
    this.highlightArchitecture = false;
    this.highlightInteriorSpace = false;
    this.highlightComposite = false;
    this.highlightPortrait = false;
    this.highlightProduct = false;
  }

  checkCategory(category:number[]) {
    if(category[0] == 7 && category[1] == 2) {
      this.highlightArchitecture = true;
    } else if(category[0] == 8 && category[1] == 2) {
          this.highlightInteriorSpace = true;
    } else if(category[0] == 11 && category[1] == 2) {
          this.highlightComposite = true;
    } else if(category[0] == 2 && category[1] == 9) {
          this.highlightPortrait = true;
    } else if(category[0] == 2 && category[1] == 10) {
          this.highlightProduct = true;
    }
  }

  loadPostsByCategory(category:number[]):void {
    this.resetHighlight();
    this.checkCategory(category);
    this.postsService.loadPostsByCategory(category);
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

}
