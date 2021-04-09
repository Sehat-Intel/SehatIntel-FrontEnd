import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { UserDataService } from '../../../@core/mock/user-data.service';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'ngx-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.scss'],
})
export class ViewRecordsComponent implements OnInit {
  records: any;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getAllUserData().subscribe((records) => {
      this.records = records;
      console.log(this.records);
    })
  }

  formatDate(date) {
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = date.getFullYear();
    return day + "/" + month + "/" + year;
}

  onDownload(record): void
  {
    var caseStartDate = this.formatDate(new Date(record.caseStartDate));
    var caseEndDate = this.formatDate(new Date(record.caseEndDate));

    var reportQRUrl = `http://localhost:4200/pages/records/view-records/${record._id}`;
    var docDefinition = {
      info: {
        title: `Report of ${record.name}`,
        pageMargins: [ 40, 60, 40, 60 ],
        pageSize: 'A4',
        author: 'Sehat Intel'
        },
        content: [
          {text: 'Sehat Intel', style: 'header'},
          { text: `Report of ${record.name}`, style: 'subheader' },
          '\n',
          { table: {
            widths: [150, 250],
            body: [
              ['Name', `${record.name}`],
              ['Age', `${record.age}`],
              ['Email', {text: `${record.email}`, link: `mailTo:${record.email}`}],
              ['Phone', {text: `${record.phone}`, link: `tel:${record.phone}`}],
              ['Doctor\'s Prescription', `${record.prescription}`],
              ['Case Date', `${caseStartDate} - ${caseEndDate}` ],
              ['Hospital Name', `${record.hospitalsName}`],
              ['Diseases', `${record.labReportDiagnosistics}`],
            ]
              }
          },
          '\n',
          {
            // in browser is supported loading images via url from reference by name in images
            image: 'recordImage',
            fit: [200, 200]
          },
          '\n',
          {text: 'Open your report here'},
          { qr: reportQRUrl },
          '\n',
        ],
        images: {
          // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
          recordImage: `${record.labReportFileUrl}`
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

    pdfMake.createPdf(docDefinition).download(`Report of ${record.name}`);
    }

}
