import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'ngx-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.scss']
})
export class ViewRecordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onDownload(): void
  {
    var url = 'http://localhost:4200/pages/records/view-records';
    var docDefinition = {
      info: {
        title: 'Report of Tumin Sheth',
        pageMargins: [ 40, 60, 40, 60 ],
        pageSize: 'A4',

        author: 'Sehat Intel'
        },
        content: [
          {text: 'Sehat Intel', style: 'header'},
          { text: 'Report of Tumin Sheth', style: 'subheader' },
          '\n',
          { table: {
            widths: [150, 250],
            body: [
              ['Name', 'Tumin Sheth'],
              ['Age', '21'],
              ['Email', {text: 't.sheth33@gmail.com', link: 'http://google.com'}],
              ['Phone', {text: '+91-7575064212', link: 'tel:(503) 468-4890'}],
              ['Doctor\'s Prescription', 'You will be fine don\'t worry my dear'],
              ['Case Date', '12-02-2021'],
              ['Hospital Name', 'Sheth Hospital'],
              ['Diseases', 'Diarrhea'],
            ]
              }
          },
          '\n',
          {
            // in browser is supported loading images via url from reference by name in images
            image: 'snow',
            fit: [200, 200]
          },
          '\n',
          {text: 'Open your report here'},
          { qr: url },
          '\n',
        ],
        images: {
          // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
          snow: 'https://cdn.shopify.com/s/files/1/0117/4483/7728/products/bh-black_1_1200x.png?v=1611676227'
        },
        styles: {
          header: {
            bold: true,
            fontSize: 15
          }
        },
        defaultStyle: {
          fontSize: 12
        }
      }
    ;

    pdfMake.createPdf(docDefinition).download("Report Of Tumin Sheth");
    }

}
