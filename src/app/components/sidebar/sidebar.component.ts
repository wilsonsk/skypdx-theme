import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';
import { state, trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Subscription } from 'rxjs';

import { StateService } from '../../services/state.service';
import { State } from '../../models/state.model';
import { PostsService } from '../../services/posts.service';
import { ComplementaryColorsService } from '../../services/complementary-colors.service';
import { ComplementaryColors } from '../../models/complementary-colors.model';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

 animations: [
   trigger('routeAnimation', [
     transition('void => *', [
       style({'transform': 'translateX(-100%)', 'opacity': '0'}),
       // animate('550ms 2500ms')
       animate('0ms 0ms')
     ]),
   ])
 ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  colors:ComplementaryColors;
  private postsLoadedSubscription: Subscription
  private stateChangedSubscription: Subscription;
  state: State;
  // highlightArchitecture: boolean = false;
  // highlightInteriorSpace: boolean = false;
  // highlightComposite: boolean = false;
  // highlightPortrait: boolean = false;
  // highlightProduct: boolean = false;

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

  checkCategory(category:number) {
    if(category == 14) {
      this.stateService.setState('highlightArchitecture', true);
    } else if(category == 15) {
      this.stateService.setState('highlightInteriorSpace', true);
    } else if(category == 16) {
      this.stateService.setState('highlightComposite', true);
    } else if(category == 17) {
      this.stateService.setState('highlightPortrait', true);
    } else if(category == 18) {
      this.stateService.setState('highlightProduct', true);
    } else if(category == 19) {
      this.stateService.setState('highlightMyGear', true);
    }
  }

  loadAbout():void {
    this.postsService.reset();
    this.stateService.resetHighlight();
    this.stateService.setState('highlightAbout', true);

  }

  loadContact():void {
    this.postsService.reset();
    this.stateService.resetHighlight();
    this.stateService.setState('highlightContact', true);

  }

  loadPostsByCategory(category:number):void {
    this.stateService.resetHighlight();
    this.checkCategory(category);
    this.postsService.loadPostsByCategory(category);
  }

  toggledDropdown() {
    this.stateService.setState("isDroppeddown", !this.state.isDroppeddown);
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

  goBack():void {
    this.postsService.loadPosts();
    // this.stateService.setState('gridIsOpen', false);
  }

}
