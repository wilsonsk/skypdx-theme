import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
        style({'transform': 'translateX(-100%)', 'opacity': '0'}),
        animate('1000ms 1000ms')
      ]),
      transition('* => void', [
        animate(1000, style({
          'transform': 'translateX(-100%)',
          'opacity': '0'
        }))
      ])
    ]),
    trigger('sidebarAnimation', [
      transition('* => void', [
        animate('1000ms', style({
          'transform': 'translateX(-100%)',
          'opacity': '0'
        }))
      ])
    ]),
    trigger('photoGridAnimation', [
      transition('* => void', [
        animate(1000, style({
          'transform': 'translateX(100%)',
          'opacity': '0'
        }))
      ])
    ]),
  ]
 })
export class LandingComponent implements OnInit {
  @Output() landingPageLoaded = new EventEmitter<any>();
  photoClicked: boolean = false;
  private stateChangedSubscription: Subscription;

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
}
