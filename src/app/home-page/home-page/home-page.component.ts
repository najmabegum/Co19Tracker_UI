import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidStatisticsService } from './shared/covid-statistics.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  
})
export class HomePageComponent implements OnInit {  
  
  source : string;  
  constructor(private covidService : CovidStatisticsService) {           
  }

  ngOnInit(): void {        
    this.source = "https://covid19api.com/"
    var data = this.covidService.getCovidData();    
  }

  

}
