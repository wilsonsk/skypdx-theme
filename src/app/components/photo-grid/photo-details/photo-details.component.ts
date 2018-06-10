import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, style, query, animate, keyframes, group, animateChild } from '@angular/animations';

import { PostsService } from '../../../services/posts.service';

import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  animations: [
    trigger('leftSideBar', [
      transition('void => *', [
        query('code', [
          style({
            'opacity': '0',
            'transform': 'translateX(-500px)'
          }),
          animate('2s')
        ])
      ])
    ]),
    trigger('rightSideBar', [
      transition(':enter', [
        query('code', [
          style({
            'opacity': '0',
            // 'transform': 'translateX(500px)'
          }),
          animate('2s')
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
        style({'opacity': '0'}),
        animate('4s')
      ])
    ]),
    trigger('photo', [
      transition('void => *', [
        // style({'width': '100%'}),
        // animate('6s')
      ])
    ]),
  ]
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  post: Post;
  private postLoadedSubscription: Subscription;

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

  ngOnDestroy() {
    this.postLoadedSubscription.unsubscribe();
  }
}
