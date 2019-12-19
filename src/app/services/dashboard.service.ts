import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }
  fetchAgentsCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchallagentscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  liveAgentsCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchliveagentscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  pausedAgentsCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchpausedagentscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  holdAgentsCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchholdagentscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  activeUsersCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchactiveuserscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  activeCampaignCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchactivecampaignscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  allUsersCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchalluserscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  allCampaignCounts(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/agents/fetchallcampaingscount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

}