import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { state, trigger, transition, style, animate } from '@angular/animations';

import { ComplementaryColorsService } from '../../services/complementary-colors.service';
import { ComplementaryColors } from '../../models/complementary-colors.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

 animations: [
   trigger('routeAnimation', [
     transition('void => *', [
       style({'transform': 'translateX(-100%)', 'opacity': '0'}),
       animate(1000)
     ]),
     transition('* => void', [
       animate(1000, style({
         'transform': 'translateX(-100%)',
         'opacity': '0'
       })
     ]),
   ])
 ]
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
