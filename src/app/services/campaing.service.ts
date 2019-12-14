import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CampaingService {

  constructor(private http: HttpClient) { }

  createCampaing(request): Observable<any> {
    return this.http
      .post('http://localhost:4011/api/campaing/createcampaing', request)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  fetchCampaing(): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/campaing/fetchcampaing')
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  fetchCampaingsById(id): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/campaing/fetchCampaingById/'+id)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  deleteCampaing(id): Observable<any> {
    return this.http
      .get('http://localhost:4011/api/campaing/deletecampaing/' + id)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  updateCampaingStatus(request): Observable<any> {
    return this.http
      .put('http://localhost:4011/api/campaing/updatecampaingstatus', request)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  updateCampaing(request): Observable<any> {
    return this.http
      .put('http://localhost:4011/api/campaing/updatecampaing', request)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }

}