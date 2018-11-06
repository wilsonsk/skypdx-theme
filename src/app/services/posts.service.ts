import { Injectable, Component, OnInit, OnDestroy } from '@angular/core';
import { WpApiPosts, WpApiPages } from 'wp-api-angular';
import { Headers } from '@angular/http';
import { Subject } from 'rxjs';

import { Post } from '../models/post.model';
import { LandingPage } from '../models/landing-page.model';

// WP CATEGORIES INDICES:
// Without Main Grid
// Architecture: [0] == 14
// Interior Space: [0] == 15
// Composite: [0] == 16
// Portrait: [0] == 17
// Product: [0] == 18
// My Gear: [0] == 19

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsLoaded = new Subject<any>();
  landingPageLoaded = new Subject<any>();
  curId:number;
  postsArray:Post[] = [];
  postById:Post;
  landingPage: LandingPage;

  constructor(private wpApiPosts: WpApiPosts, private wpApiPages: WpApiPages) {}

  loadLandingPage() {
    const postsObservable = this.wpApiPages.getList();
    const _this = this;
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const pages = data.json();
        for(var page in pages) {

          if(pages[page].title['rendered'] === "Landing Page") {
            const landing = pages[page];
            _this.landingPage = new LandingPage(landing.acf['featured_image']);
            _this.landingPageLoaded.next();

          }
        }
      }
    });
  }

  getLandingPage():LandingPage {
    return this.landingPage;
  }

  // Loads featured images
  loadPosts():void {
    const postsObservable = this.wpApiPosts.getList();
    const _this = this;
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const posts = data.json();
        _this.postsArray = [];
        for(var post in posts) {
          if(
          posts[post].acf["featured_photo"] == true
          ) {
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
    this.curId = id;
    const postsObservable = this.wpApiPosts.get(id);
    const _this = this;
    let i = 0;
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const post = data.json();
        _this.postById = new Post(post.id,post.author,post.categories[0],post.title['rendered'],post.acf['featured_image'], post.content['rendered'], post.date, post.link)
        _this.postsLoaded.next();
      }
    });
  }

  loadPostsByCategory(category:number):void {
    const postsObservable = this.wpApiPosts.getList();
    const _this = this;
    const pagesSubsciption = postsObservable.subscribe({
      next(data) {
        const posts = data.json();
        _this.postsArray = [];
        for(var post in posts) {
          if(
            posts[post].categories[0] == category
          ) {
            const curPost = posts[post];
            _this.postsArray.push(new Post(curPost.id,curPost.author,curPost.categories[0],curPost.title['rendered'],curPost.acf['featured_image'], curPost.content['rendered'], curPost.date, curPost.link));
          }
        }
        _this.postsLoaded.next();
      }
    });

  }

  getPostById():Post {
    return this.postById;
  }

  reset() {
    this.postsArray = [];
    this.postById = null;
    this.postsLoaded.next();
  }
}
