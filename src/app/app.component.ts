import { Component } from '@angular/core';

import { WpService } from '../services/wp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private wpService:WpService) {
    this.test();
  }

  test() {
    this.wpService.getWp()
      .subscribe((data) => {
        console.log("test " + data);
      });
  }

  title = 'app';
}
