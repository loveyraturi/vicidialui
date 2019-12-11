import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(request): Observable<any> {
    return this.http
      .post('http://192.168.100.126:4011/api/user/createuser', request)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  fetchUser(): Observable<any> {
    return this.http
      .get('http://192.168.100.126:4011/api/user/fetchusers')
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  fetchusersById(id): Observable<any> {
    return this.http
      .get('http://192.168.100.126:4011/api/user/fetchusersById/'+id)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }
  deleteUser(id): Observable<any> {
    return this.http
      .get('http://192.168.100.126:4011/api/user/deleteuser' + id)
      .map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
  }

  updateUser(request): Observable<any> {
    return this.http
      .get('http://192.168.100.126:4011/api/user/updateuser', request)
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