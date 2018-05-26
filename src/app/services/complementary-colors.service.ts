import { Injectable, Output, EventEmitter, HostBinding } from '@angular/core';

import { ComplementaryColors } from '../models/complementary-colors.model';

import { PhotoService } from '../services/photo.service';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryColorsService {
  private complementaryColors: ComplementaryColors[] = [
    {
      primaryColor: '#ff7f50',
      secondaryColor: '#50f3ff',
      tertiaryColor: '#50ff5c'
    },
    {
      primaryColor: '#ffb2ad',
      secondaryColor: '#adebff',
      tertiaryColor: '#ccffad'
    },
    {
      primaryColor: '#ff5191',
      secondaryColor: '#91ff51',
      tertiaryColor: '#e8ff51'
    },
    {
      primaryColor: '#88b6ff',
      secondaryColor: '#ffb888',
      tertiaryColor: '#ff9a88'
    },
  ];
  public defaultColors: ComplementaryColors = {
      primaryColor: 'black',
      secondaryColor: 'white',
      tertiaryColor: 'black'
    }
    isDefaultColorSelected: boolean = false;

  constructor(private photoService: PhotoService) { }

  getComplementaryColors() {
    if(this.isDefaultColorSelected) {
      const colorSelector = Math.floor(Math.random() * this.complementaryColors.length);
      switch(colorSelector) {
        case 0:
          this.isDefaultColorSelected = false;
          this.photoService.toggleDraggable();
          return this.complementaryColors[colorSelector];
        case 1:
          this.isDefaultColorSelected = false;
          this.photoService.toggleDraggable();
          return this.complementaryColors[colorSelector];
        case 3:
          this.isDefaultColorSelected = false;
          this.photoService.toggleDraggable();
          return this.complementaryColors[colorSelector];
        case 4:
          this.isDefaultColorSelected = false;
          this.photoService.toggleDraggable();
          return this.complementaryColors[colorSelector];
        case undefined:
          this.isDefaultColorSelected = false;
          this.photoService.toggleDraggable();
          return this.complementaryColors[0];
        default:
          this.isDefaultColorSelected = false;
          this.photoService.toggleDraggable();
          return this.complementaryColors[0];
      }
    } else {
      this.isDefaultColorSelected = true;
      this.photoService.toggleDraggable();
      return this.defaultColors;
    }


  }
}
