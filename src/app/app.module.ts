import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { MarkdownModule } from 'ngx-md';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { EditorComponent } from './editor/editor.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    ContentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
