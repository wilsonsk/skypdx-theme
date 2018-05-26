import { Injectable } from '@angular/core';

import { ComplementaryColors } from '../models/complementary-colors.model';

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
  public selectedColors: ComplementaryColors = {
      primaryColor: 'black',
      secondaryColor: 'white',
      tertiaryColor: 'black'
    }

  constructor() { }

  getComplementaryColors() {
    const colorSelector = Math.floor(Math.random() * this.complementaryColors.length);

    switch(colorSelector) {
      case 0:
        return this.complementaryColors[colorSelector];
      case 1:
        return this.complementaryColors[colorSelector];
      case 3:
        return this.complementaryColors[colorSelector];
      case 4:
        return this.complementaryColors[colorSelector];
      case undefined:
        return this.complementaryColors[0];
      default:
        return this.complementaryColors[0];
    }
  }
}
