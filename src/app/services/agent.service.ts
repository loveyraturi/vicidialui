import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class AgentService {
 
    constructor(private http:HttpClient) {}

    dialCall(ruleConf): Observable<any> {
        return this.http
          .post('http://157.245.109.0:4011/api/agents/dialcall', ruleConf).pipe(
          map(
            res => {
                return res;
              },
              err => {
                return err;
              }
          ))
    }
    feedback(ruleConf): Observable<any> {
        return this.http
          .post('http://157.245.109.0:4011/api/agents/feedback', ruleConf).pipe(
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