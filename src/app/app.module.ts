import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { WeaponViewerComponent } from './weapon-viewer/weapon-viewer.component';
import { SideViewerComponent } from './side-viewer/side-viewer.component';

import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    WeaponViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 20 }),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
