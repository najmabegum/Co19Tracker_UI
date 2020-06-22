import { Injectable } from '@angular/core';
import { Resolve , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TrackerModel } from '../shared/tracker-model';
import { CovidStatisticsService } from "../shared/covid-statistics.service";

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<TrackerModel>{

  apiData : TrackerModel = {  Global: { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 }, 
                              Countries:[], Date:'', fromAPI:false };
                              
  constructor(private covidService : CovidStatisticsService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : TrackerModel{
    this.covidService.getCovidData().subscribe({next:apiResponse => this.apiData = apiResponse});
    return this.apiData;
  }
}
