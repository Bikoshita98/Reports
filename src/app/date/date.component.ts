import { Component } from '@angular/core';
import { ReportsService } from '../Services/report.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  constructor(public reportService: ReportsService) {}
  date: any;
  newDate: any = false;
  selectedReport: any = null;
  // reports:any = []
  reports: any = [
    {
      bookingID: 12345,
      fullname: 'ABC',
      age: 12,
      gender: 'F',
      height: 5.4,
      weight: 50,
      bpSys: 70,
      bpDys: 100,
      phone: 1234567890,
      sampleId: '123abc',
      tests_selected: [
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
        // {
        //   testlog_testname:'Albumin',
        //   testlog_calculated: '3.4',
        //   testlog_unit: 'g/dL',
        // },
      ],
    },
    {
      bookingID: 12345,
      fullname: 'ABC',
      age: 12,
      gender: 'F',
      height: 5.4,
      weight: 50,
      bpSys: 70,
      bpDys: 100,
      phone: 1234567890,
      sampleId: '123abc',
      tests_selected: [
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
        {
          testlog_testname: 'Albumin',
          testlog_calculated: '3.4',
          testlog_diagnosis: 'Normal',
          testlog_normal_range: '4-6',
          testlog_unit: 'g/dL',
        },
      ],
    },
  ];

  async search(date: any): Promise<void> {
    this.newDate = true;
    this.newDate = this.date;

    try {
      // this.reports = await this.reportService.getData(date);
      // console.log('Reports in ts', this.reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }

  openReport(report: any): void {
    this.selectedReport = report;
  }

  closeReport(): void {
    this.selectedReport = null;
  }

  downloadPdf(): void {
    console.log('download pdf clicked');

    const data = document.getElementById('pdfContent');

    // if (data) {
    //   const scale = 3;
    //   // html2canvas(data).then((canvas) => {
    //     html2canvas(data,{scale}).then((canvas) => {
    //     const imgWidth = 210;
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //     const contentDataURL = canvas.toDataURL('image/png',1.0);
    //     let pdf = new jsPDF('p', 'mm', 'a4');
    //     pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
    //     pdf.save('report.pdf');
    //   });
    // }

    if (data) {
    const scale = 3;
    
    html2canvas(data, { scale }).then((canvas) => {
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / (canvas.width / scale);

      const contentDataURL = canvas.toDataURL('image/png', 1.0);
      let pdf = new jsPDF('p', 'mm', 'a4');

      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

      if (imgHeight > pageHeight) {
        while (imgHeight > position) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        }
      }
      
      pdf.save('report.pdf');
    });
  }
  }
}
