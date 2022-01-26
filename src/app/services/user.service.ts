
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environment';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  backendUrl = environment.BACKEND_URL;

  createUser(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/createuser', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateUserStatus(id,status): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/updateuserstatus/'+id+'/'+status).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  cloneBreakType(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/cloneBreakType', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateBreakType(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/updateBreakType', request).pipe(
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
      .post('http://'+this.backendUrl+'/goautodial/assignUserToGroup', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateAssignUserToGroup(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/updateAssignUserToGroup', request).pipe(
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
      .get('http://'+this.backendUrl+'/goautodial/fetchAllUsers').pipe(
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
      .get('http://157.245.109.0:4011/api/agents/openBrowser').pipe(
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
        .get('http://157.245.109.0:4011/api/agents/initwhatsapp/'+number+'/'+message).pipe(
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
          .get('http://157.245.109.0:4011/api/agents/sendwhatsapp').pipe(
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
      .get('http://'+this.backendUrl+'/goautodial/fetchusersbycampaing/'+campaing).pipe(
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
      .get('http://157.245.109.0:4011/api/user/fetchcountofreport').pipe(
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
      .get('http://157.245.109.0:4011/api/user/fetchreportdata/'+limit+"/"+offset).pipe(
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
      .post('http://157.245.109.0:4011/api/user/createexcel',data).pipe(
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

  fetchCountReportDataBetween(data): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/fetchcountreportdatabetween',data,{
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
  fetchcountrecordingreportdatabetween(data): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/fetchcountrecordingreportdatabetween',data,{
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
  fetchCountAttendanceReportDataBetween(data): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/fetchcountattendancereportdatabetween',data,{
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
  
  fetchReportDataBetween(data): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/fetchreportdatabetween',data,{
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
  fetchAttendanceReportDataBetween(data): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/fetchattendancereportdatabetween',data,{
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
  fetchusersByName(name): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchusersByName/'+name).pipe(
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
      .get('http://157.245.109.0:4011/api/user/fetchusercountbycampaing/'+id).pipe(
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
      .get('http://157.245.109.0:4011/api/user/fetchuserfromcampaing/'+id).pipe(
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
      .get('http://'+this.backendUrl+'/goautodial/deleteUser/' + id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  deleteBreakType(id): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/deleteBreakType/' + id).pipe(
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
      .post('http://'+this.backendUrl+'/goautodial/updateUser', request).pipe(
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