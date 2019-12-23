
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
      .post('http://103.66.232.186:4011/api/campaing/createcampaing', request).pipe(
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
      .get('http://103.66.232.186:4011/api/campaing/fetchcampaing').pipe(
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
    .get('http://103.66.232.186:4011/api/campaing/fetchallfiles').pipe(
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
      .get('http://103.66.232.186:4011/api/campaing/fetchCampaingById/'+id).pipe(
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
      .get('http://103.66.232.186:4011/api/campaing/deletecampaing/' + id).pipe(
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
      .put('http://103.66.232.186:4011/api/campaing/updatecampaingstatus', request).pipe(
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
      .put('http://103.66.232.186:4011/api/campaing/updatecampaing', request).pipe(
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
      .put('http://103.66.232.186:4011/api/campaing/updatesurvey', request).pipe(
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