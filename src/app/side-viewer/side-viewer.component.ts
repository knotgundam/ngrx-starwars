import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-side-viewer',
  templateUrl: './side-viewer.component.html',
  styleUrls: ['./side-viewer.component.css']
})
export class SideViewerComponent implements OnInit {

  character: Observable<string>;
  side: string;
  constructor(store: Store<AppState>) {
    store.select('character').subscribe(name => {
      this.side = this.mapCharacterSide(name);
    });
  }
  mapCharacterSide(name: string) {
    switch (name) {
      case 'luke': {
        return 'resistance';
      }
      case 'chewbacca': {
        return 'resistance';
      }
      case 'bobafett': {
        return '';
      }
      case 'kyloren': {
        return 'first order';
      }
      default: {
        return 'no side no party !!!!';
      }
    }

  }

  ngOnInit() {
  }

}
