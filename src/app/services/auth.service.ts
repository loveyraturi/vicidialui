
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class AuthService {
 
    constructor(private http:HttpClient) {}

    validateLogin(ruleConf): Observable<any> {
        return this.http
          .post('http://192.168.1.222:4011/api/user/auth', ruleConf).pipe(
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