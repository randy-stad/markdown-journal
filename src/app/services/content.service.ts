import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  public markdown: string;

  constructor() {
    this.markdown = '# Welcome to Markdown Journal';
  }

}
