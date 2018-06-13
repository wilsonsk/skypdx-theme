import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { state, trigger, transition, style, query, animate, keyframes, group, animateChild } from '@angular/animations';

import { PostsService } from '../../../services/posts.service';

import { Post } from '../../../models/post.model';

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
  private postLoadedSubscription: Subscription;
  titleColor:string = "#000";
  logoColor:string = "#000";

  constructor(private postsService:PostsService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.postLoadedSubscription = this.postsService.postsLoaded.subscribe((data) => {
      this.postLoaded();
    });
  }

  postLoaded():void {
    const curPost = this.postsService.getPostById();
    this.post = curPost;
  }

  onLeftArrowClick() {
    alert('ccedd')
  }

  ngOnDestroy() {
    this.postLoadedSubscription.unsubscribe();
  }
}
