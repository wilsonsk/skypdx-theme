import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateService } from '../services/state.service';
import { PostsService } from '../services/posts.service';

import { State } from '../models/state.model';
import { LandingPage } from '../models/landing-page.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  private stateChangedSubscription: Subscription;
  private landingPageLoadedSubscription: Subscription;

  landingPage: LandingPage;
  landingPageLoaded: boolean;
  landingPageImagePath: string;
  state: State;

  heroStyle(): Object {
    if(this.landingPageLoaded) {
      const url = 'url(' + this.landingPageImagePath + '),';
      return {
        'background': url,
        'background-size':     'cover',
        'background-repeat':   'no-repeat',
        'background-position': 'center center',
        // border: $base-padding solid white;
        'background-attachment': 'fixed',
      };
    } else {
      return {
        'background': 'url("../../assets/images/_DSC5771.jpg")',
        'background-size':     'cover',
        'background-repeat':   'no-repeat',
        'background-position': 'center center',
        // border: $base-padding solid white;
        'background-attachment': 'fixed',
      };
    }

  }


  @HostListener("window:scroll", ['$event']) onWindowScroll($event) {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
    this.stateService.setState('didScroll', true);

  }

  constructor(private stateService: StateService, private postsService: PostsService) {
  }

  ngOnInit() {
    this.state = this.stateService.getState();
    this.postsService.loadLandingPage();
    this.landingPageLoadedSubscription = this.postsService.landingPageLoaded.subscribe(() => {
      this.landingPage = this.postsService.getLandingPage();
      this.landingPageImagePath = this.landingPage.imagePath;
      this.landingPageLoaded = true;
    });
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
    });
  }

  ngOnDestroy() {
    this.stateChangedSubscription.unsubscribe();
  }

}
