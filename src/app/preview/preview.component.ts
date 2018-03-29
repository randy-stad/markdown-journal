import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(public contentService: ContentService) { }

  ngOnInit() {
  }

}
