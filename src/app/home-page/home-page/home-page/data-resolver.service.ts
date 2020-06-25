import { Injectable } from '@angular/core';
import { Resolve , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TrackerModel } from '../shared/tracker-model';
import { CovidStatisticsService } from "../shared/covid-statistics.service";
import { ApiConfigService } from '../shared/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<TrackerModel>{

  apiData : TrackerModel = { data : { Global: { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 }, 
                             Countries:[], Date:''}, source :'' };
                              
  constructor(private apiConfig : ApiConfigService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : TrackerModel{
    this.apiData = this.apiConfig.apiData;
    return this.apiData;
  }
}
