import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as fromModel from '../patients.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  //url = 'http://localhost:8000/patients';
  url = 'http://ec2-16-16-99-53.eu-north-1.compute.amazonaws.com:8000/patients';

  constructor(private http: HttpClient) {}

  addPatient(
    patient: fromModel.PatientDetails
    /*first_name: string | null,
    last_name: string | null,
    email: string | null,
    password: string | null,
    gender: fromModel.Gender,
    birthdate: Date,
    address: string | null,
    phone_number: string | null*/
  ) {
    const options = {
      ...patient,
      birthdate: this.formatDate(patient.birthdate),
    };

    return this.http.post(this.url, options, {
      responseType: 'text',
    });
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
    ].join('-');
  }
}
