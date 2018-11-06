import { Component, OnInit, OnDestroy } from '@angular/core';
import { state, trigger, transition, style, query, animate, keyframes, group, animateChild } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { PhotoService } from '../../services/photo.service';
import { PostsService } from '../../services/posts.service';
import { StateService } from '../../services/state.service';
import { Post } from '../../models/post.model';
import { State } from '../../models/state.model';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
  animations: [
    trigger('loadGrid', [
      transition('void => *', [
        style({
          'opacity': '0',
        }),
        animate('2000ms 400ms')
      ])
    ]),
  ]
})

export class PhotoGridComponent implements OnInit, OnDestroy  {
  masonryItems: Post[] = [];
  isDraggable: boolean = false;
  private isDraggableSubscription: Subscription;
  private postsLoadedSubscription: Subscription;
  private stateChangedSubscription: Subscription;
  private locationSubscription: Subscription;

  photoId: number = 1;
  state: State;

  public myOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
  };

  constructor(private photoService: PhotoService, private stateService: StateService, private router: Router, private activatedRouter: ActivatedRoute, private postsService:PostsService, private location: Location) { }

  ngOnInit() {
    this.locationSubscription = <Subscription>(this.location.subscribe)(() => {
      this.stateService.setState('gridIsOpen', false);
    });
    this.isDraggableSubscription = this.photoService.draggableToggled.subscribe((data) => {
      this.isDraggable = !this.isDraggable;
    });
    this.postsLoadedSubscription = this.postsService.postsLoaded.subscribe((data) => {
      this.postsLoaded();
    });
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {

      this.state = stateCopy;
    });

    this.postsLoaded();
    console.log(this.masonryItems.length)
  }

  postsLoaded():void {
    this.masonryItems = [];
    this.masonryItems = this.postsService.getPosts();
  }

  onOpenPhotoDetails():void {
    this.router.navigate(['photo']);
  }

  ngOnDestroy() {
    this.isDraggableSubscription.unsubscribe();
    this.postsLoadedSubscription.unsubscribe();
    this.masonryItems = [];
  }

  onPhotoFrameClicked(post: Post) {
    if(!this.isDraggable) {
      this.router.navigate([post.category, 'photo', post.id]);
    }
  }
}
