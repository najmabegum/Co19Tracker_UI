import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CovidStatisticsService } from '../../shared/covid-statistics.service';
import { TrackerData } from '../../shared/tracker-data';
import { ActivatedRoute } from '@angular/router';
import { TrackerModel } from '../../shared/tracker-model';

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
  
  coviddata : TrackerModel = {  Global: { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 }, 
                                Countries:[], Date:'', fromAPI:false };
  countriesList : TrackerData[];  
  lastUpdate : string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute) {     
    this.coviddata = this.route.parent.snapshot.data['regionalData'];
    this.countriesList = this.coviddata.Countries;
    this.dataSource = new MatTableDataSource(this.countriesList);   
    this.lastUpdate = this.coviddata.Date;   
   }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
