import { Component, OnInit, OnDestroy, Output, EventEmitter, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { state, trigger, transition, style, animate, keyframes } from '@angular/animations';

import { PostsService } from '../../services/posts.service';

import { Post } from '../../models/post.model';
import { StateService } from '../../services/state.service';
import { State } from '../../models/state.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
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
    trigger('sidebarAnimation', [
      transition('* => void', [
        animate('1500ms', style({
          'transform': 'translateX(-100%)',
          'opacity': '0'
        }))
      ])
    ]),
  ]
 })
export class LandingComponent implements OnInit, OnDestroy {
  @Output() landingPageLoaded = new EventEmitter<any>();
  photoClicked: boolean = false;
  private stateChangedSubscription: Subscription;
  private postsLoadedSubscription: Subscription;

  @HostListener("window:scroll", ['$event']) onWindowScroll($event) {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
    this.stateService.setState('didScroll', true);

  }

  state: State;

  constructor(private stateService: StateService, private postsService: PostsService) {
  }

  ngOnInit() {
    this.state = this.stateService.getState();
    this.postsService.loadPosts();

    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
    });
  }

  ngOnDestroy() {
  }
}
