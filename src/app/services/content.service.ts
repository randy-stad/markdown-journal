import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  public markdown: string;
  public content: any[] = [
    {
      name: '2018',
      icon: 'folder',
      expanded: true,
      months: [
        {
          icon: 'calendar',
          name: 'January',
          active: false,
          days: [
            {
              day: '1',
              file: '01-01.md'
            },
            {
              day: '2',
              file: '01-02.md'
            },
            ,
            {
              day: '3',
              file: '01-03.md'
            }
          ]
        },
        {
          icon: 'calendar',
          name: 'February',
          active: false,
          days: [
            {
              day: '1',
              file: '02-01.md'
            },
            {
              day: '2',
              file: '02-02.md'
            },
            ,
            {
              day: '3',
              file: '02-03.md'
            }
          ]
        },
        {
          icon: 'calendar',
          name: 'March',
          active: false,
          days: [
            {
              day: '1',
              file: '03-01.md'
            },
            {
              day: '2',
              file: '03-02.md'
            },
            ,
            {
              day: '3',
              file: '03-03.md'
            }
          ]
        },
        {
          icon: 'calendar',
          name: 'April',
          active: false,
          days: [
            {
              day: '1',
              file: '04-01.md'
            },
            {
              day: '2',
              file: '04-02.md'
            },
            ,
            {
              day: '3',
              file: '04-03.md'
            }
          ]
        }
      ]
    },
    {
      name: '2017',
      icon: 'folder',
      expanded: true,
      months: [
        {
          icon: 'calendar',
          name: 'January',
          active: false,
          days: [
            {
              day: '1',
              file: '01-01.md'
            },
            {
              day: '2',
              file: '01-02.md'
            },
            ,
            {
              day: '3',
              file: '01-03.md'
            }
          ]
        },
        {
          icon: 'calendar',
          name: 'February',
          active: false,
          days: [
            {
              day: '1',
              file: '02-01.md'
            },
            {
              day: '2',
              file: '02-02.md'
            },
            ,
            {
              day: '3',
              file: '02-03.md'
            }
          ]
        },
        {
          icon: 'calendar',
          name: 'March',
          active: false,
          days: [
            {
              day: '1',
              file: '03-01.md'
            },
            {
              day: '2',
              file: '03-02.md'
            },
            ,
            {
              day: '3',
              file: '03-03.md'
            }
          ]
        },
        {
          icon: 'calendar',
          name: 'April',
          active: false,
          days: [
            {
              day: '1',
              file: '04-01.md'
            },
            {
              day: '2',
              file: '04-02.md'
            },
            ,
            {
              day: '3',
              file: '04-03.md'
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    this.markdown = '# Welcome to Markdown Journal!';
  }

}
