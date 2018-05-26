import { Injectable, EventEmitter, Output } from '@angular/core';

import { WpService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private masonryItems = [
    { imagePath: 'http://52.89.243.4/wp-content/uploads/2018/05/NUpSYDgglO2Ms0U1Bvs6ppK2xL2-gvVJDQzrZwPa_dE.jpg' },
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
  @Output() masonryItemsLoaded = new EventEmitter<any>();
  @Output() draggableToggled = new EventEmitter<any>();

  constructor(private wpService: WpService) {
    this.loadWpPhotos();
  }

  loadWpPhotos() {
    this.wpService.getWp()
       .subscribe((photos) => {
         if(photos) {
           // console.log('TEST WP: ' + JSON.stringify(photos[0].guid['rendered']));
           this.masonryItems = [];
           for(var photo in photos) {
             // console.log('TEST WP: ' + JSON.stringify(photos[photo].guid['rendered']));
             if(photos[photo]) {
               let imgPath = photos[photo].guid['rendered'];

               this.masonryItems.push({ imagePath: imgPath});
             }
           }
           // console.log(this.masonryItems);

           this.masonryItemsLoaded.emit(this.masonryItems.slice());

         } else {
           console.log('TEST WP failed');
         }
       });
  }

  getMasonryItems() {
    return this.masonryItems.slice();
  }

  toggleDraggable() {
    this.draggableToggled.emit();
  }
}
