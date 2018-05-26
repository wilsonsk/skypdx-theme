import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  masonryItems = [];
  isDraggable: boolean = false;

  public myOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
  };

  constructor(private photoService: PhotoService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.photoService.masonryItemsLoaded.subscribe((data) => {
      this.photosLoaded();
    });
    this.photoService.draggableToggled.subscribe((data) => {
      this.isDraggable = !this.isDraggable;
    });

  }

  photosLoaded() {
    this.masonryItems = this.photoService.getMasonryItems();
  }

  onOpenPhotoDetails() {
    this.router.navigate(['photo']);
  }

}
