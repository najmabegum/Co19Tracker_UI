import { Component, OnInit } from '@angular/core';
import { TrackerModel } from '../../shared/tracker-model';
import { TrackerData } from '../../shared/tracker-data';
import { ActivatedRoute } from '@angular/router';
import { CovidStatisticsService } from '../../shared/covid-statistics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  coviddata : TrackerModel = { data : { Global: { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 }, 
                               Countries:[], Date:''}, source :'' }; 
  globalData : TrackerData = { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 };
  countriesList : TrackerData[] = [];
  
  globalChartLabels = ['New Confirmed', 'Total Confirmed', 
                    'New Deaths', 'Total Deaths', 'New Recovered','Total Recovered'];
  globalChartData: number[] = [];
  globalChartType = 'pie';

  top10ConfirmedLabels: string[] = [];
  top10ConfirmedData: number[] = [];
  top10ConfirmedChartType = 'bar';

  top10DeathsLabels: string[] = [];
  top10DeathsData: number[] = [];
  top10DeathsChartType = 'doughnut';

  top10RecoveredLabels: string[] = [];
  top10RecoveredData: number[] = [];
  top10RecoveredChartType = 'pie';

  constructor(private route: ActivatedRoute) { 
    this.coviddata = this.route.parent.snapshot.data['regionalData'];
    this.globalData = this.coviddata.data.Global;
    this.countriesList = this.coviddata.data.Countries;


    this.globalChartData = [this.globalData.NewConfirmed,
      this.globalData.TotalConfirmed,
      this.globalData.NewDeaths,
      this.globalData.TotalDeaths,
      this.globalData.NewRecovered,
      this.globalData.TotalRecovered]

      // Confirmed
      var confirmedList = this.countriesList;
      var data_Confirmed = confirmedList.sort((a,b) => 0 - (b.NewConfirmed > a.NewConfirmed ? -1 : 1)).slice(0,10);
      
      data_Confirmed.forEach(element => {
        this.top10ConfirmedData.push(element.NewConfirmed),
        this.top10ConfirmedLabels.push(element.Country)
      });

      // Deaths
      var deathList = this.countriesList;
      var data_Deaths = deathList.sort((a,b) => 0 - (b.TotalDeaths > a.TotalDeaths ? -1 : 1)).slice(0,10);
      
      data_Deaths.forEach(element => {
        this.top10DeathsData.push(element.TotalDeaths),
        this.top10DeathsLabels.push(element.Country)
      });

      // Recovered
      var recoveredList = this.countriesList;
      var data_Recovered = recoveredList.sort((a,b) => 0 - (b.TotalRecovered > a.TotalRecovered ? -1 : 1)).slice(0,10);
      
      data_Recovered.forEach(element => {
        this.top10RecoveredData.push(element.TotalDeaths),
        this.top10RecoveredLabels.push(element.Country)
      });

  }  
  ngOnInit(): void {
  }

}
