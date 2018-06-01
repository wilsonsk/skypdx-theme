import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  draggableToggled = new Subject<any>();

  constructor() {
  }

  toggleDraggable() {
    this.draggableToggled.next();
  }
}
