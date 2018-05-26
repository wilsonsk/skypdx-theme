import { Component, OnInit, Input } from '@angular/core';

import { ComplementaryColorsService } from '../../services/complementary-colors.service';
import { ComplementaryColors } from '../../models/complementary-colors.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  colors:ComplementaryColors;

  constructor(private complementaryColorsService: ComplementaryColorsService) { }

  ngOnInit() {
    this.colors = this.complementaryColorsService.getComplementaryColors();
  }

  onChangeColors() {
    this.colors = this.complementaryColorsService.getComplementaryColors();
    // this.isColorSet = true;
  }

}
