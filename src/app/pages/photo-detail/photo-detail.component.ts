import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../models/post.model';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  constructor(private postsService: PostsService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.postsService.loadPostById(id);
  }

}
