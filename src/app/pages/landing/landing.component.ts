import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Output() landingPageLoaded = new EventEmitter<any>();

  postsArray:Post[] = [];

  constructor(private wpApiPosts: WpApiPosts) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    console.log(this.postsArray)

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
