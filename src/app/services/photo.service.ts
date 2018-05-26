import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private masonryItems = [
    { imagePath: 'http://blog.emauirealestate.com/files/2016/11/hana-cart-900-02.jpg' },
    { imagePath: 'http://blog.emauirealestate.com/files/2016/11/hana-cart-900-02.jpg' },
    { imagePath: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg' },
    { imagePath: 'https://www.independent.ie/incoming/article29052573.ece/ALTERNATES/w620/stormy-dunes-think_1108889a.jpg' },
    { imagePath: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg' },
    { imagePath: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg' },
    { imagePath: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg' },
    { imagePath: 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_67920257.jpg' },
    { imagePath: 'https://cdn.cnn.com/cnnnext/dam/assets/180208155400-09-week-in-photos-0209-restricted-super-169.jpg' },
    { imagePath: 'http://illinoisdouble.com/wp-content/uploads/rain-free-photos-957-images-and-pictures-on-pngtree-photos.jpeg' },
    { imagePath: 'https://www.independent.ie/incoming/article29052573.ece/ALTERNATES/w620/stormy-dunes-think_1108889a.jpg' },
    { imagePath: 'https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6328f41af34624007929053f3478c3c1&w=1000&q=80' }
  ];
  @Output() photoClicked = new EventEmitter<any>();

  constructor() { }

  getMasonryItems() {
    return this.masonryItems.slice();
  }
}
