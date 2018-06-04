import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: ':category/photo/:id',
    component: PhotoDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
