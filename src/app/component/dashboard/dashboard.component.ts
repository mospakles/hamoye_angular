import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/shared/auth.service';
import { DashboardService } from 'src/app/shared/dashboard.service';

export interface Flight {
  arrival: string;
  departure: string;
  aircraft: string;
  time: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['airport', 'time', 'arrival', 'departure'];
  dataSource!: MatTableDataSource<Flight>;
  flights: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private auth: AuthService,
    private readonly dashboardService: DashboardService,
  ) {
    this.dashboardService.getFlights().subscribe((data) => {
      console.log(data);
      this.flights = data;

      this.dataSource = new MatTableDataSource(this.flights);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {}

  logOut() {
    this.auth.logout();
  }
}
