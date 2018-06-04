import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
