import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { TrackerModel } from './tracker-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http : HttpClient) { }

  private envUrl = '/api';
  private downloadUrl = 'http://localhost:3000/download';
  apiData : TrackerModel = { data : { Global: { Country:'', NewConfirmed:0,NewDeaths:0,NewRecovered:0,TotalConfirmed:0,TotalDeaths:0,TotalRecovered:0 }, 
                             Countries:[], Date:''}, source :'' };

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAPI(this.envUrl).subscribe((response: any) => {         
          this.apiData = response;
          resolve(true);
    });
  });
}

getAPI(url: string): Observable<TrackerModel> {
  const headers = new Headers({'Content-Type' : 'application/json'});
  return this.http.get(url)
      .pipe(map((response: TrackerModel) => response));
}

downloadPDF()
{
  window.open(this.downloadUrl, "_blank");
}



}
