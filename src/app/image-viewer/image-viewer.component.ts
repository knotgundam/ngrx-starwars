import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  character: Observable<string>;
  constructor(store: Store<AppState>) {
    this.character = store.select('character');
  }

  ngOnInit() {
  }

}
