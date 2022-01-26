
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environment';


import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PropertiesService {

  constructor(private http: HttpClient) { }
  backendUrl = environment.BACKEND_URL;

  addProperties(request): Observable<any> {
    return this.http
      .post('http://'+this.backendUrl+'/goautodial/addProperties', request).pipe(
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