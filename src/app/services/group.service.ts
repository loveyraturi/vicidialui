
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class GroupService {
 
    constructor(private http:HttpClient) {}

    fetchGroups(): Observable<any> {
        return this.http
          .get('http://localhost:4011/api/user/fetchgroups').pipe(
          map(
            res => {
                return res;
              },
              err => {
                return err;
              }
          ))
    }

    fetchGroupsById(id): Observable<any> {
        return this.http
          .get('http://localhost:4011/api/user/fetchgroupsbyuser/'+id).pipe(
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