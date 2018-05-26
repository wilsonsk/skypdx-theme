import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { WpService } from '../../services/wp.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  photoClicked: boolean = false;

  constructor(private wpService:WpService, private photoService: PhotoService) {
  }

  ngOnInit() {

  }

  test() {
    this.wpService.getWp()
      .subscribe((data) => {
        console.log("test " + data);
      });
  }

  title = 'app';

}
