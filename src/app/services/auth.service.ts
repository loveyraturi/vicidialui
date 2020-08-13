
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
          .post('http://157.245.109.0:8080/microapp/microapp/goautodial/login', ruleConf).pipe(
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
