import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  model = 'foo';

  options: any = {
    lineWrapping: true,
    toolbar: false
  };

  ngAfterViewInit(): void {
    // this._textEditor.togglePreview();
  }

}
