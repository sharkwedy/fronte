import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _campaingUrl = 'http://localhost:3000/api/campaings';

  constructor(private http: HttpClient) { }

  getCampaings() {
    return this.http.get<any>(this._campaingUrl);
  }
}
