import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PhotoService } from '../../services/photo.service';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit, OnDestroy  {
  masonryItems: Post[] = [];
  isDraggable: boolean = false;
  private isDraggableSubscription: Subscription;
  private postsLoadedSubscription: Subscription;
  photoId: number = 1;

  public myOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
  };

  constructor(private photoService: PhotoService, private router: Router, private activatedRouter: ActivatedRoute, private postsService:PostsService) { }

  ngOnInit() {
    this.isDraggableSubscription = this.photoService.draggableToggled.subscribe((data) => {
      this.isDraggable = !this.isDraggable;
    });
    this.postsLoadedSubscription = this.postsService.postsLoaded.subscribe((data) => {
      this.postsLoaded();
    });
  }

  postsLoaded():void {
    this.masonryItems = this.postsService.getPosts();
  }

  onOpenPhotoDetails():void {
    this.router.navigate(['photo']);
  }

  ngOnDestroy() {
    this.isDraggableSubscription.unsubscribe();
    this.postsLoadedSubscription.unsubscribe();
  }

  onPhotoFrameClicked(post: Post) {
    if(!this.isDraggable) {
      this.router.navigate([post.category, 'photo', post.id]);
    }
  }

}
