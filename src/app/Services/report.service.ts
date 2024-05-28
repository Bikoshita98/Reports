import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportDetails } from '../Model/reportDetails';
import { EnvironmentalVariables } from '../Environment/EnvironmentVariable';

@Injectable({
  providedIn: 'root'
})

export class ReportsService {
  // date:string | undefined = '2024-05-23';
  date:string | undefined;
  reportDetails? : any | undefined;

  constructor(private httpClient: HttpClient) { }

  getReportsByDate(date:any) :Observable<ReportDetails> {
    return this.httpClient.get<ReportDetails>(EnvironmentalVariables.fetchReportsBaseUrl,{
      params: new HttpParams().set('d',date)
    })

  }

  getData(date:any): Promise<any> {
    return new Promise((resolve,reject) => {
      this.getReportsByDate(date).subscribe({
        next: (response) => {
          console.log(response);
          // this.reportDetails = response.data;
          this.reportDetails = response.data;
          // console.log("The details are", this.reportDetails);
          resolve(this.reportDetails);
        },
        error: (err) => {
          reject(err);
        }
      })
    })
  }
}