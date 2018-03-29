import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewCardComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
