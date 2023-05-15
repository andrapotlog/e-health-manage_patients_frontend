import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fromModel from '../patients.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  //url = 'http://localhost:8000/patients';
  url = 'http://ec2-16-16-99-53.eu-north-1.compute.amazonaws.com:8000/patients';

  constructor(private http: HttpClient) {}

  updatePatient(id: number, patient: fromModel.PatientDetails) {
    const options = {
      id,
      ...patient,
      birthdate: this.formatDate(patient.birthdate),
    };

    //console.log(options);

    return this.http.put(this.url, options, {
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
