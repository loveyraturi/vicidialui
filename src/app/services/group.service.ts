import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class GroupService {
 
    constructor(private http:HttpClient) {}

    fetchGroups(): Observable<any> {
        return this.http
          .get('http://192.168.100.126:4011/api/user/fetchgroups')
          .map(
            res => {
                return res;
              },
              err => {
                return err;
              }
          )
    }

    fetchGroupsById(id): Observable<any> {
        return this.http
          .get('http://192.168.100.126:4011/api/user/fetchgroupsbyuser/'+id)
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