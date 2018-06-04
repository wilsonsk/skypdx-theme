import { Injectable, Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';
import { Subject } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsLoaded = new Subject<any>();

  postsArray:Post[] = [];
  postById:Post;

  constructor(private wpApiPosts: WpApiPosts) {}

  loadPosts():void {
    const postsObservable = this.wpApiPosts.getList();
    const _this = this;
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const posts = data.json();
        for(var post in posts) {
          if(posts[post].categories[0] == 2) {
            const curPost = posts[post];
            _this.postsArray.push(new Post(curPost.id,curPost.author,curPost.categories[0],curPost.title['rendered'],curPost.acf['featured_image'], curPost.content['rendered'], curPost.date, curPost.link));
          }
        }
        _this.postsLoaded.next();
      }
    });
  }

  getPosts():Post[] {
    return this.postsArray.slice();
  }

  loadPostById(id:number):void {
    const postsObservable = this.wpApiPosts.get(id);
    const _this = this;
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const post = data.json();
        _this.postById = new Post(post.id,post.author,post.categories[0],post.title['rendered'],post.acf['featured_image'], post.content['rendered'], post.date, post.link)
        _this.postsLoaded.next();
      }
    });
  }

  getPostById():Post {
    return this.postById;
  }
}
