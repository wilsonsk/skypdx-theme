import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxMasonryModule } from 'ngx-masonry';

// Services
import { WpService } from './services/wp.service';
import { PhotoService } from './services/photo.service';

// Components
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { SizePhotoDirective } from './directives/size-photo.directive';
import { PhotoDetailsComponent } from './components/photo-grid/photo-details/photo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PhotoGridComponent,
    SizePhotoDirective,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMasonryModule
  ],
  providers: [
    WpService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
