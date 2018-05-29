import { Injectable, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  @Output() postsLoaded = new EventEmitter<any>();

  postsArray:Post[] = [];

  constructor(private wpApiPosts: WpApiPosts) {}

  getPosts() {

    const postsObservable = this.wpApiPosts.getList();
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const posts = data.json();

        for(var post in posts) {
          if(posts[post].categories[0] == 2) {
            const curPost = posts[post];

          }
        }
      }
    });
  }
}
