import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { state, trigger, transition, style, query, animate, keyframes, group, animateChild } from '@angular/animations';
import { Location } from '@angular/common';

import { PostsService } from '../../../services/posts.service';
import { StateService } from '../../../services/state.service';
import { Post } from '../../../models/post.model';
import { State } from '../../../models/state.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  animations: [
    trigger('leftSideBar', [
      // state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        query('code', [
          style({
            'opacity': '0',
            'transform': 'translateX(-100%)'
          }),
          animate('1s')
        ])
      ])
    ]),
    trigger('rightSideBar', [
      transition(':enter', [
        query('code', [
          style({
            'opacity': '0',
            'transform': 'translateX(100%)'
          }),
          animate('1s')
        ]),
        query('@rightSideBarLogo', [
          animateChild()
        ])
      ])
    ]),
    // trigger('rightSideBar', [
    //   transition('void => *', [
    //     style({
    //       'opacity': '0',
    //       'transform': 'translateX(500px)'
    //     }),
    //     animate('2s')
    //   ]),
    // ]),
    trigger('rightSideBarLogo', [
      transition('void => *', [
        // style({'opacity': '0'}),
        animate('2s', keyframes([
          style({ 'opacity': '0', offset: 0}),
          style({ 'opacity': '1', 'color': '#357EDD', offset: 0}),
          style({ 'opacity': '1', 'color': '#FFFF00', offset: 0.6}),
          style({ 'opacity': '1', 'color': 'black', offset: 1}),
        ]))
      ])
    ]),
    trigger('photo', [
      transition('void => *', [
        style({'opacity': '0'}),
        animate('2s')
      ])
    ]),
  ]
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  post: Post;
  posts: Post[];
  private postLoadedSubscription: Subscription;
  private locationSubscription: Subscription;
  titleColor:string = "#000";
  logoColor:string = "#000";
  curPostId:number;
  private stateChangedSubscription: Subscription;

  state: State;

  constructor(private stateService: StateService, private postsService:PostsService, private activatedRoute: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.locationSubscription = <Subscription>(this.location.subscribe)(() => {
      this.stateService.setState('gridIsOpen', true);
      this.location.go('../');
    });
    this.postsService.loadPosts();
    this.postLoadedSubscription = this.postsService.postsLoaded.subscribe((data) => {
      // this.postLoaded();
      this.postsLoaded();
    });
    this.stateChangedSubscription = this.stateService.stateChanged.subscribe((stateCopy:State) => {
      this.state = stateCopy;
    });
  }

  postLoaded():void {
    const curPost = this.postsService.getPostById();
    this.post = curPost;
    this.curPostId = curPost.id;
  }

  postsLoaded():void {
    this.curPostId = this.postsService.curId;
    const posts = this.postsService.getPosts();
    this.posts = posts;
    let _this = this;
    const tempArr = this.posts.filter((p) => {
      return p.id == _this.curPostId;
    });
    this.post = tempArr[0];
  }

  onLeftArrowClick():void {
    alert(this.posts)
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.postLoadedSubscription.unsubscribe();
    this.postsService.reset();
  }
}
