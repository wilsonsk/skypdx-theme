import { Component, OnInit, OnDestroy } from '@angular/core';
import { state, trigger, transition, style, query, animate, keyframes, group, animateChild } from '@angular/animations';
import { Subscription } from 'rxjs';

import { StateService } from '../services/state.service';
import { State } from '../models/state.model';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('loadAbout', [
      transition('void => *', [
        style({
          'opacity': '0',
        }),
        animate('2000ms 400ms')
      ])
    ]),
  ]
})

export class AboutComponent implements OnInit, OnDestroy {
  private stateChangedSubscription: Subscription;
  masonryItems: Post[] = [];
  private postsLoadedSubscription: Subscription;
  state: State;

  public myOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
  };

  constructor(private stateService: StateService, private postsService:PostsService) { }

  ngOnInit() {
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {

      this.state = stateCopy;
    });
    this.postsLoadedSubscription = this.postsService.postsLoaded.subscribe((data) => {
      this.postsLoaded();
    });
    this.postsService.loadPostsByCategory(20);
  }

  postsLoaded():void {
    this.masonryItems = [];
    this.masonryItems = this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.postsLoadedSubscription.unsubscribe();
    this.masonryItems = [];
  }
}
