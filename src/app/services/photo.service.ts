import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  @Output() draggableToggled = new EventEmitter<any>();

  constructor() {
  }

  toggleDraggable() {
    this.draggableToggled.emit();
  }
}
