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
      tertiaryColor: '#50ff5c',
      textColorPrimary: '#F4F4F4',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#ffb2ad',
      secondaryColor: '#adebff',
      tertiaryColor: '#ccffad',
      textColorPrimary: '#F4F4F4',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#ff5191',
      secondaryColor: '#91ff51',
      tertiaryColor: '#e8ff51',
      textColorPrimary: '#F4F4F4',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#88b6ff',
      secondaryColor: '#ffb888',
      tertiaryColor: '#ff9a88',
      textColorPrimary: '#F4F4F4',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#FFD700 ',
      secondaryColor: '#000000',
      tertiaryColor: '#ff9a88',
      textColorPrimary: '#000000',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#357EDD  ',
      secondaryColor: '#ffb888',
      tertiaryColor: '#ff9a88',
      textColorPrimary: '#000000 ',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#F6FFFE ',
      secondaryColor: '#',
      tertiaryColor: '#ff9a88',
      textColorPrimary: '#000000 ',
      textColorSecondary: '#F4F4F4'
    },
    {
      primaryColor: '#F6FFFE ',
      secondaryColor: '#ffb888',
      tertiaryColor: '#ff9a88',
      textColorPrimary: '#000000 ',
      textColorSecondary: '#F4F4F4'
    },
  ];
  // public defaultColors: ComplementaryColors = {
  //     primaryColor: '#FF4136',
  //     secondaryColor: '#F4F4F4',
  //     tertiaryColor: '#555555',
  //     textColorPrimary: '#F4F4F4',
  //     textColorSecondary: '#FFFF00'
  //   }
  public defaultColors: ComplementaryColors = {
      primaryColor: '#999999',
      secondaryColor: '#F4F4F4',
      tertiaryColor: '#000000',
      textColorPrimary: '#000000 ',
      textColorSecondary: '#000000'
    }
    isDefaultColorSelected: boolean = false;

  constructor(private photoService: PhotoService) { }

  getComplementaryColors() {
    // if(this.isDefaultColorSelected) {
    //   const colorSelector = Math.floor(Math.random() * this.complementaryColors.length);
    //   switch(colorSelector) {
    //     case 0:
    //       this.isDefaultColorSelected = false;
    //       this.photoService.toggleDraggable();
    //       return this.complementaryColors[colorSelector];
    //     case 1:
    //       this.isDefaultColorSelected = false;
    //       this.photoService.toggleDraggable();
    //       return this.complementaryColors[colorSelector];
    //     case 3:
    //       this.isDefaultColorSelected = false;
    //       this.photoService.toggleDraggable();
    //       return this.complementaryColors[colorSelector];
    //     case 4:
    //       this.isDefaultColorSelected = false;
    //       this.photoService.toggleDraggable();
    //       return this.complementaryColors[colorSelector];
    //     case undefined:
    //       this.isDefaultColorSelected = false;
    //       this.photoService.toggleDraggable();
    //       return this.complementaryColors[0];
    //     default:
    //       this.isDefaultColorSelected = false;
    //       this.photoService.toggleDraggable();
    //       return this.complementaryColors[0];
    //   }
    // } else {
    //   this.isDefaultColorSelected = true;
    //   this.photoService.toggleDraggable();
    //   return this.defaultColors;
    // }

    return this.defaultColors;



  }
}
