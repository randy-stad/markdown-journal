import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

}
