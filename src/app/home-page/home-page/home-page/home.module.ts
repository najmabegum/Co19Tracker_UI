import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page.component';
import { DisplayDataComponent } from '../dataDisplay/display-data/display-data.component';
import { DashboardComponent } from '../statistics/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from "../home-page/data-resolver.service";

import { ChartsModule } from 'ng2-charts';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [
  {
    path: 'home',
    component : HomePageComponent,
    resolve:{ regionalData : DataResolverService},
    children:[
      {
        path: 'dashboard',
        component : DashboardComponent        
      },
      {
        path: 'dataDisplay',
        component: DisplayDataComponent        
      }
    ]    
  },  
  { 
    path: '',   redirectTo: '/home/dataDisplay', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomePageComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
    DashboardComponent,
    DisplayDataComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,    
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeModule { }
