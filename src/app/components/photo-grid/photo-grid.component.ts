import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  masonryItems = [];

  public myOptions = {
    transitionDuration: '0.8s',
    gutter: 20,
  };

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.masonryItems = this.photoService.getMasonryItems();
  }

  onPhotoDetails() {
    this.photoService.photoClicked.emit();
  }

}
