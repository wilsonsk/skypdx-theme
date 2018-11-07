import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'http://skypdx.com/index.php/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { NgxMasonryModule } from 'ngx-masonry';

// Services
import { PhotoService } from './services/photo.service';
import { ComplementaryColorsService } from './services/complementary-colors.service';
import { PostsService } from './services/posts.service';
import { StateService } from './services/state.service';

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
import { HeroComponent } from './hero/hero.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
    HeroComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMasonryModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  providers: [
    PhotoService,
    ComplementaryColorsService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
