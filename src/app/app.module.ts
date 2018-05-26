import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgxMasonryModule } from 'ngx-masonry';

// Services
import { WpService } from './services/wp.service';
import { PhotoService } from './services/photo.service';
import { ComplementaryColorsService } from './services/complementary-colors.service';

// Components
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { SizePhotoDirective } from './directives/size-photo.directive';
import { PhotoDetailsComponent } from './components/photo-grid/photo-details/photo-details.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
import { DraggableDirective } from './directives/draggable.directive';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'photography',
    component: LandingComponent
  },
  {
    path: 'photo',
    component: PhotoDetailComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PhotoGridComponent,
    SizePhotoDirective,
    PhotoDetailsComponent,
    LandingComponent,
    PhotoDetailComponent,
    DraggableDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMasonryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WpService,
    PhotoService,
    ComplementaryColorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
