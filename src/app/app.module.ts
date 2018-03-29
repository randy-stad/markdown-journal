import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CovalentTextEditorModule } from '@covalent/text-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    CovalentTextEditorModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
