
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
          .get('http://localhost:6001//goautodial/fetchAllGroups').pipe(
          map(
            res => {
                return res;
              },
              err => {
                return err;
              }
          ))
    }
    fetchRecordings(): Observable<any> {
      return this.http
        .get('http://localhost:6001//goautodial/fetchRecordings').pipe(
        map(
          res => {
              return res;
            },
            err => {
              return err;
            }
        ))
  }
  fetchRecordingsByUsername(userName): Observable<any> {
    return this.http
      .get('http://localhost:6001//goautodial/fetchRecordingsByUsername/'+userName).pipe(
      map(
        res => {
            return res;
          },
          err => {
            return err;
          }
      ))
}
    fetchGroupsWithCampaings(): Observable<any> {
      return this.http
        .get('http://localhost:6001//goautodial/fetchGroupsWithCampaings').pipe(
        map(
          res => {
              return res;
            },
            err => {
              return err;
            }
        ))
  }
  fetchGroupByCampaings(campaingName): Observable<any> {
    return this.http
      .get('http://localhost:6001//goautodial/fetchGroupByCampaings/'+campaingName).pipe(
      map(
        res => {
            return res;
          },
          err => {
            return err;
          }
      ))
}
    createGroup(request): Observable<any> {
      return this.http
        .post('http://localhost:6001//goautodial/createUserGroup', request).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
    }


    fetchGroupsByUser(id): Observable<any> {
        return this.http
          .get('http://157.245.109.0:4011/api/user/fetchgroupsbyuser/'+id).pipe(
          map(
            res => {
                return res;
              },
              err => {
                return err;
              }
          ))
    }

    updateGroupByName(request): Observable<any> {
      return this.http
        .put('http://157.245.109.0:4011/api/user/updategroup', request).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
    }

    updateGroup(request): Observable<any> {
      return this.http
        .put('http://localhost:6001//goautodial/updateGroup', request).pipe(
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