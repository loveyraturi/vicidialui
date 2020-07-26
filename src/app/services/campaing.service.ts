
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
      .post('http://157.245.109.0:6001/microapp//goautodial/createCampaing', request).pipe(
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
      .post('http://157.245.109.0:6001/microapp/goautodial/campaingGroupMapping', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  loadCsvLeadData(request): Observable<any> {
    return this.http
      .post('http://157.245.109.0:6001/microapp/goautodial/loadCsvLeadData', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateCampaingGroupMapping(request): Observable<any> {
    return this.http
      .post('http://157.245.109.0:6001/microapp//goautodial/updateCampaingGroupMapping', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  createBreakTypes(request): Observable<any> {
    return this.http
      .post('http://157.245.109.0:6001/microapp/goautodial/createBreakTypes',request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchBreakTypes(): Observable<any> {
    return this.http
      .get('http://157.245.109.0:6001/microapp/goautodial/fetchAllBreakTypes').pipe(
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
      .get('http://157.245.109.0:6001/microapp//goautodial/fetchcampaings').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchLeadVersions(): Observable<any> {
    return this.http
      .get('http://157.245.109.0:6001/microapp/goautodial/fetchLeadVersions').pipe(
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
    .get('http://157.245.109.0:4011/api/campaing/fetchallfiles').pipe(
    map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    ))
  }
  fetchCampaingByName(name): Observable<any> {
    return this.http
      .get('http://157.245.109.0:6001/microapp/goautodial/fetchCampaingByName/'+name).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  
  fetchCampaingByUserName(userName): Observable<any> {
    return this.http
      .get('http://157.245.109.0:6001/microapp/goautodial/fetchCampaingByUserName/'+userName).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchActiveUserByCampaingName(userName): Observable<any> {
    return this.http
      .post('http://157.245.109.0:6001/microapp/goautodial/fetchactivecampaingwithusers',userName).pipe(
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
      .get('http://157.245.109.0:6001/microapp/goautodial/fetchactivecampaing').pipe(
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
      .get('http://157.245.109.0:4011/api/campaing/deletecampaing/' + id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateCampaingStatus(id,status): Observable<any> {
    return this.http
      .get('http://157.245.109.0:6001/microapp/goautodial/updatecampaingstatus/'+id+'/'+status).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateLeadStatus(id,status): Observable<any> {
    return this.http
      .get('http://157.245.109.0:6001/microapp/goautodial/updateleadstatus/'+id+'/'+status).pipe(
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
      .post('http://157.245.109.0:6001/microapp/goautodial/updateCampaing', request).pipe(
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
      .put('http://157.245.109.0:4011/api/campaing/updatesurvey', request).pipe(
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