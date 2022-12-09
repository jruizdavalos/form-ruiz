import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ErrorComponent } from './shared/components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
