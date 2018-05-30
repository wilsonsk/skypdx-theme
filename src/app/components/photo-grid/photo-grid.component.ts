import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhotoService } from '../../services/photo.service';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  masonryItems: Post[] = [];
  isDraggable: boolean = false;

  public myOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
  };

  constructor(private photoService: PhotoService, private router: Router, private activatedRouter: ActivatedRoute, private postsService:PostsService) { }

  ngOnInit() {
    this.photoService.draggableToggled.subscribe((data) => {
      this.isDraggable = !this.isDraggable;
    });
    this.postsService.postsLoaded.subscribe((data) => {
      this.postsLoaded();
    });
  }

  postsLoaded():void {
    this.masonryItems = this.postsService.getPosts();
  }

  onOpenPhotoDetails():void {
    this.router.navigate(['photo']);
  }

}
