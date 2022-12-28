import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';
import { AnimesPagesComponent } from './animes-pages/animes-pages.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StreetPageComponent,
    AnimesPagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    StreetPageComponent,
    AnimesPagesComponent

  ]

})
export class PagesModule { }
