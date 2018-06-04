import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostsService } from '../../../services/posts.service';

import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
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
