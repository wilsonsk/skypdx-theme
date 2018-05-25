import { OnInit, Component } from '@angular/core';

import { WpService } from './services/wp.service';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  photoClicked: boolean = false;

  constructor(private wpService:WpService, private photoService: PhotoService) {
    this.test();
  }

  ngOnInit() {
    this.photoService.photoClicked.subscribe((data) => {
      this.photoClicked = !this.photoClicked;
    });
  }

  test() {
    this.wpService.getWp()
      .subscribe((data) => {
        console.log("test " + data);
      });
  }

  title = 'app';
}
