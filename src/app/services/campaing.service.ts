
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environment';


import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CampaingService {

  constructor(private http: HttpClient) { }
  backendUrl = environment.BACKEND_URL;

  createCampaing(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/createCampaing', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  campaingGroupMapping(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/campaingGroupMapping', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }

  loadCsvLeadData(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/loadCsvLeadData', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  filterDnd(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/filterDnd', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }  
  uploadEmails(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/uploadEmails', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }  
  uploadDND(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/uploadDND', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }  
  updateCampaingGroupMapping(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/updateCampaingGroupMapping', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  showEmailDataByFileName(fileName): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/showEmailDataByFileName/'+fileName).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  createBreakTypes(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/createBreakTypes',request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchBreakTypes(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchAllBreakTypes').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchCampaing(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchcampaings').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchLeadVersions(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchLeadVersions').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchFileNameWithCount(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchLeadVersionsWithCount').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  rechain(fileName,status): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/rechain/'+fileName+'/'+status).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  showUploadedEmailFiles(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/showUploadedEmailFiles').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchRecordings(): Observable<any>{
    return this.http
    .get('http://157.245.109.0:4011/api/campaing/fetchallfiles').pipe(
    map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    ))
  }
  fetchCampaingByName(name): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchCampaingByName/'+name).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  
  fetchCampaingByUserName(userName): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchCampaingByUserName/'+userName).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchStatus(campaingname): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchStatuByCampaingName/'+campaingname).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchTotalLeads(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchTotalLeads/').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchActiveLeads(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchActiveLeads/').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchLeadsCountAssignedToUser(campaingName): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchLeadsCountAssignedToUser/'+campaingName).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchActiveUserByCampaingName(userName): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/fetchactivecampaingwithusers',userName).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  fetchActiveCampaing(): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/fetchactivecampaing').pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  deleteCampaing(id): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/deletecampaing/' + id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  deleteLeads(id): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/deleteLeads/' + id).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateCampaingStatus(id,status): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/updatecampaingstatus/'+id+'/'+status).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateLeadStatus(id,status): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/updateleadstatus/'+id+'/'+status).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateEmailStatus(id,status): Observable<any> {
    return this.http
      .get('http://'+this.backendUrl+'/goautodial/updateEmailStatus/'+id+'/'+status).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  
  updateCampaing(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/updateCampaing', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  sendEmailBlast(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/sendEmailToCampaing', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  scheduleCornJob(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/scheduleCornJob', request).pipe(
      map(
        res => {
          return res;
        },
        err => {
          return err;
        }
      ))
  }
  updateSurvey(request): Observable<any> {
    return this.http
      .put('http://157.245.109.0:4011/api/campaing/updatesurvey', request).pipe(
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