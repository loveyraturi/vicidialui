
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CampaingService {

  constructor(private http: HttpClient) { }

  createCampaing(request): Observable<any> {
    return this.http
      .post('http://103.31.147.252:6001/microapp/goautodial/createCampaing', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  campaingGroupMapping(request): Observable<any> {
    return this.http
      .post('http://103.31.147.252:6001/microapp/goautodial/campaingGroupMapping', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchCampaing(): Observable<any> {
    return this.http
      .get('http://103.31.147.252:6001/microapp/goautodial/fetchcampaings').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchRecordings(): Observable<any>{
    return this.http
    .get('http://103.31.147.252:4011/api/campaing/fetchallfiles').pipe(
    map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    ))
  }
  fetchCampaingsById(id): Observable<any> {
    return this.http
      .get('http://103.31.147.252:4011/api/campaing/fetchCampaingById/'+id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchActiveCampaing(): Observable<any> {
    return this.http
      .get('http://103.31.147.252:4011/api/campaing/fetchactivecampaing').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  deleteCampaing(id): Observable<any> {
    return this.http
      .get('http://103.31.147.252:4011/api/campaing/deletecampaing/' + id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateCampaingStatus(request): Observable<any> {
    return this.http
      .put('http://103.31.147.252:4011/api/campaing/updatecampaingstatus', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateCampaing(request): Observable<any> {
    return this.http
      .put('http://103.31.147.252:4011/api/campaing/updatecampaing', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateSurvey(request): Observable<any> {
    return this.http
      .put('http://103.31.147.252:4011/api/campaing/updatesurvey', request).pipe(
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