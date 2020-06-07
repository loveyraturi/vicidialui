
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
      .post('http://103.31.147.252:6001/microapp/goautodial/createuser', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  assignUserToGroup(request): Observable<any> {
    return this.http
      .post('http://103.31.147.252:6001/microapp/goautodial/assignUserToGroup', request).pipe(
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
      .get('http://103.31.147.252:6001/microapp/goautodial/fetchAllUsers').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  openBrowser(): Observable<any> {
    return this.http
      .get('http://103.31.147.252:4011/api/agents/openBrowser').pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ))
    }
    initWhatsapp(number,message): Observable<any> {
      return this.http
        .get('http://103.31.147.252:4011/api/agents/initwhatsapp/'+number+'/'+message).pipe(
          map(
            res => {
              return res;
            },
            err => {
              return err;
            }
          ))
      }
      sendWhatsapp(): Observable<any> {
        return this.http
          .get('http://103.31.147.252:4011/api/agents/sendwhatsapp').pipe(
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
      .get('http://103.31.147.252:6001/microapp/goautodial/fetchusersbycampaing/'+campaing).pipe(
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
      .get('http://103.31.147.252:4011/api/user/fetchcountofreport').pipe(
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
      .get('http://103.31.147.252:4011/api/user/fetchreportdata/'+limit+"/"+offset).pipe(
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
      .post('http://103.31.147.252:4011/api/user/fetchcountreportdatabetween',data).pipe(
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
      .post('http://103.31.147.252:4011/api/user/createexcel',data).pipe(
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
      .post('http://103.31.147.252:6001/microapp/goautodial/fetchreportdatabetween',data,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).pipe(
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
      .get('http://103.31.147.252:4011/api/user/fetchusersById/'+id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchUserCountByCampaing(id): Observable<any> {
    return this.http
      .get('http://103.31.147.252:4011/api/user/fetchusercountbycampaing/'+id).pipe(
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
      .get('http://103.31.147.252:4011/api/user/fetchuserfromcampaing/'+id).pipe(
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
      .get('http://103.31.147.252:4011/api/user/deleteuser/' + id).pipe(
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
      .put('http://103.31.147.252:4011/api/user/updateuser', request).pipe(
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
      .put('http://103.31.147.252:4011/api/user/updateuserstatus', request).pipe(
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