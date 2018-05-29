import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

import { Post } from '../../models/post.model';

import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Output() landingPageLoaded = new EventEmitter<any>();

  postsArray:Post[] = [];

  constructor(private wpApiPosts: WpApiPosts, private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.getPosts();
  }

}
