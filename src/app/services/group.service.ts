
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }

  fetchGroups(): Observable<any> {
    return this.http
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchAllGroups').pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }
  paymentSchedule(request): Observable<any> {
    return this.http
      .post('http://157.245.109.0:8080/microapp/goautodial/paymentSchedule', request).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }
  setHourlyPrice(request): Observable<any> {
    return this.http
      .post('http://157.245.109.0:8080/microapp/goautodial/setHourlyPrice', request).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }
  addBalance(request): Observable<any> {
    return this.http
      .post('http://157.245.109.0:8080/microapp/goautodial/addBalance', request).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }

  fetchBalance(groupName): Observable<any> {
    return this.http
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchBalance/'+groupName).pipe(
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
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchRecordings').pipe(
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
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchRecordingsByUsername/' + userName).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }
  deleteGroup(name): Observable<any> {
    return this.http
      .get('http://157.245.109.0:8080/microapp/goautodial/deleteGroup/' + name).pipe(
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
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchGroupsWithCampaings').pipe(
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
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchGroupByCampaings/' + campaingName).pipe(
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
      .post('http://157.245.109.0:8080/microapp/goautodial/createUserGroup', request).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }

  fetchGroupByGroupName(name): Observable<any> {
    return this.http
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchGroupByGroupName/' + name).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
  }
  fetchGroupsByUser(name): Observable<any> {
    return this.http
      .get('http://157.245.109.0:8080/microapp/goautodial/fetchGroupByName/' + name).pipe(
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
      .post('http://157.245.109.0:8080/microapp/goautodial/updategroup', request).pipe(
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
      .put('http://157.245.109.0:8080/microapp/goautodial/updateGroup', request).pipe(
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