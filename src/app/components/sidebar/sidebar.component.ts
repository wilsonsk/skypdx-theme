import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { ComplementaryColorsService } from '../../services/complementary-colors.service';
import { ComplementaryColors } from '../../models/complementary-colors.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: []

})
export class SidebarComponent implements OnInit {
  colors:ComplementaryColors;

  constructor(private complementaryColorsService: ComplementaryColorsService) { }

  ngOnInit() {
    this.colors = this.complementaryColorsService.getComplementaryColors();
  }

  onChangeColors():void {
    this.colors = this.complementaryColorsService.getComplementaryColors();
  }

}
