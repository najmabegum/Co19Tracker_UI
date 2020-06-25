import { NgModule, APP_INITIALIZER  } from '@angular/core';
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
import { ApiConfigService } from '../shared/api-config.service';

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

export function init_app(appConfigService: ApiConfigService) {
  return () => appConfigService.load();
}

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
  ],
  providers:[
    ApiConfigService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ApiConfigService], multi: true }
  ]
})
export class HomeModule { }
