
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(request): Observable<any> {
    return this.http
      .post('http://103.66.232.186:4011/api/user/createuser', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchUser(): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/fetchusers').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchUserByCampaing(campaing): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/fetchusersbycampaing/'+campaing).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchCountOfReport(): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/fetchcountofreport').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchReportData(limit,offset): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/fetchreportdata/'+limit+"/"+offset).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchCountReportDataBetween(data): Observable<any> {
    return this.http
      .post('http://103.66.232.186:4011/api/user/fetchcountreportdatabetween',data).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  createExcel(data): Observable<any> {
    return this.http
      .post('http://103.66.232.186:4011/api/user/createexcel',data).pipe(
      map(
        res => {
          console.log(res,"##############$$$$$$$$$$$$$$$$$$$$")
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchReportDataBetween(data): Observable<any> {
    return this.http
      .post('http://103.66.232.186:4011/api/user/fetchreportdatabetween',data).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchusersById(id): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/fetchusersById/'+id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchUserFromCampaing(id): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/fetchuserfromcampaing/'+id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  deleteUser(id): Observable<any> {
    return this.http
      .get('http://103.66.232.186:4011/api/user/deleteuser/' + id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  updateUser(request): Observable<any> {
    return this.http
      .put('http://103.66.232.186:4011/api/user/updateuser', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  updateUserStatus(request): Observable<any> {
    return this.http
      .put('http://103.66.232.186:4011/api/user/updateuserstatus', request).pipe(
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