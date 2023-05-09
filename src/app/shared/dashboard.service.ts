import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getFlights() {
    return this.httpClient
      .get(
        `https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800`,
      )
  }
}
