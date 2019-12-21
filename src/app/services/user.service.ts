
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