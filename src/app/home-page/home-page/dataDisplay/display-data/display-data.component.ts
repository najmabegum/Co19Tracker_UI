import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CovidStatisticsService } from '../../shared/covid-statistics.service';
import { TrackerData } from '../../shared/tracker-data';
import { ActivatedRoute } from '@angular/router';
import { TrackerModel } from '../../shared/tracker-model';
import { ApiConfigService } from '../../shared/api-config.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
  providers: [ CovidStatisticsService ]
})
export class DisplayDataComponent implements OnInit {

  displayedColumns: string[] = ['Country', 'NewConfirmed', 'TotalConfirmed', 
                                'NewDeaths', 'TotalDeaths', 'NewRecovered','TotalRecovered'];
  dataSource: MatTableDataSource<TrackerData>;
  
  coviddata : TrackerModel = { data : { Global: { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 }, 
                                Countries:[], Date:''}, source :'' };
  countriesList : TrackerData[];  
  lastUpdate : string;
  source : string;
  fileUrl;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute, private apiConfig : ApiConfigService,private sanitizer: DomSanitizer) {     
    this.coviddata = this.route.parent.snapshot.data['regionalData'];        
    this.countriesList = this.coviddata.data.Countries;;
    this.dataSource = new MatTableDataSource(this.countriesList);   
    this.lastUpdate = this.coviddata.data.Date;
    this.source = this.coviddata.source;   
   }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  downloadPDF(){
    this.apiConfig.downloadPDF();
  }  

}
