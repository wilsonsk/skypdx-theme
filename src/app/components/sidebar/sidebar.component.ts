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

    this.highlightAbout = false;
    this.highlightContact = false;
    this.highlightMyGear = false;
  }

  checkCategory(category:number[]) {
    if(category[0] == 14) {
      this.highlightArchitecture = true;
    } else if(category[0] == 15) {
          this.highlightInteriorSpace = true;
    } else if(category[0] == 16) {
          this.highlightComposite = true;
    } else if(category[0] == 17) {
          this.highlightPortrait = true;
    } else if(category[0] == 18) {
          this.highlightProduct = true;
    } else if(category[0] == 19) {
          this.highlightMyGear = true;
    }
  }

  loadAbout():void {
    this.resetHighlight();
    this.highlightAbout = true;

  }

  loadContact():void {
    this.resetHighlight();
    this.highlightContact = true;

  }

  loadPostsByCategory(category:number[]):void {
    this.resetHighlight();
    this.checkCategory(category);
    this.postsService.loadPostsByCategory(category);
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

  goBack():void {
    this.postsService.loadPosts();
    this.stateService.setState('gridIsOpen', false);
  }

}
