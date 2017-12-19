import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { WeaponViewerComponent } from './weapon-viewer/weapon-viewer.component';
import { SideViewerComponent } from './side-viewer/side-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    WeaponViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
