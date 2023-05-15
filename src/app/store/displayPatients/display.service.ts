import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as fromModel from '../patients.model';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  //url = 'http://localhost:8000/patients';
  url = 'http://ec2-16-16-99-53.eu-north-1.compute.amazonaws.com:8000/patients';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<fromModel.PatientName[]> {
    return this.http.get<fromModel.PatientName[]>(this.url);
  }
}
