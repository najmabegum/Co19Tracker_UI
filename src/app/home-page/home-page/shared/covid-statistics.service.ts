import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackerModel } from './tracker-model';
import { TrackerData } from './tracker-data';

@Injectable({
  providedIn: 'root'
})
export class CovidStatisticsService {
  privateUrl ="http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getCovidData() : Observable<TrackerModel>
  {
    //  return {
    //   Global : 
    //   {
    //     Country: 'Global',
    //     NewConfirmed: 100282,
    //     TotalConfirmed: 1162857,
    //     NewDeaths: 5658,
    //     TotalDeaths: 63263,
    //     NewRecovered: 15405,
    //     TotalRecovered: 230845
    //   },
    //   Countries :
    //   [
    //     {Country: 'Afghanistan', NewConfirmed: 18, TotalConfirmed: 299 , NewDeaths: 1, TotalDeaths: 7, NewRecovered: 0, TotalRecovered: 10},
    //     {Country: 'Andorra', NewConfirmed: 27, TotalConfirmed: 466 , NewDeaths: 1, TotalDeaths: 17, NewRecovered: 5, TotalRecovered: 21},
    //     {Country: 'Bangladesh', NewConfirmed: 9, TotalConfirmed: 70 , NewDeaths: 2, TotalDeaths: 8, NewRecovered: 4, TotalRecovered: 30},
    //     {Country: 'Benin', NewConfirmed: 27, TotalConfirmed: 201 , NewDeaths: 0, TotalDeaths: 2, NewRecovered: 0, TotalRecovered: 1},
    //     {Country: 'Montenegro', NewConfirmed: 18, TotalConfirmed: 299 , NewDeaths: 1, TotalDeaths: 7, NewRecovered: 0, TotalRecovered: 10},
    //     {Country: 'Namibia', NewConfirmed: 0, TotalConfirmed: 14 , NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 3},
    //     {Country: 'Peru', NewConfirmed: 151, TotalConfirmed: 1746 , NewDeaths: 12, TotalDeaths: 73, NewRecovered: 377, TotalRecovered: 914},
    //     {Country: 'Saint-Martin (French part)', NewConfirmed: 0, TotalConfirmed: 0 , NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 0},
    //     {Country: 'Germany', NewConfirmed: 4933, TotalConfirmed: 96092 , NewDeaths: 169, TotalDeaths: 1444, NewRecovered: 1825, TotalRecovered: 26400},
    //     {Country: 'Northern Mariana Islands', NewConfirmed: 18, TotalConfirmed: 299 , NewDeaths: 1, TotalDeaths: 7, NewRecovered: 0, TotalRecovered: 10},
    //     {Country: 'India', NewConfirmed: 27, TotalConfirmed: 466 , NewDeaths: 1, TotalDeaths: 17, NewRecovered: 5, TotalRecovered: 21},
    //     {Country: 'Oman', NewConfirmed: 9, TotalConfirmed: 70 , NewDeaths: 2, TotalDeaths: 8, NewRecovered: 4, TotalRecovered: 30},
    //     {Country: 'Palestinian Territory', NewConfirmed: 27, TotalConfirmed: 201 , NewDeaths: 0, TotalDeaths: 2, NewRecovered: 0, TotalRecovered: 1},
    //     {Country: 'Panama', NewConfirmed: 18, TotalConfirmed: 299 , NewDeaths: 1, TotalDeaths: 7, NewRecovered: 0, TotalRecovered: 10},
    //     {Country: 'Gambia', NewConfirmed: 0, TotalConfirmed: 14 , NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 3},
    //     {Country: 'Fiji', NewConfirmed: 151, TotalConfirmed: 1746 , NewDeaths: 12, TotalDeaths: 73, NewRecovered: 377, TotalRecovered: 914},
    //     {Country: 'Estonia', NewConfirmed: 0, TotalConfirmed: 0 , NewDeaths: 0, TotalDeaths: 0, NewRecovered: 0, TotalRecovered: 0}
    // ],
    // Date : new Date().toDateString()
    // } 
    return this.http.get<TrackerModel>(this.privateUrl);
  }  
}
