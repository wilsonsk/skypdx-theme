import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { Post } from '../../models/post.model';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Output() landingPageLoaded = new EventEmitter<any>();
  photoClicked: boolean = false;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.loadPosts();
  }
}
