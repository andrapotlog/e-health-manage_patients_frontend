import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  //url = 'http://localhost:8000/patients';
  url = 'http://ec2-16-16-99-53.eu-north-1.compute.amazonaws.com:8000/patients';

  constructor(private http: HttpClient) {}

  deletePatient(id: number) {
    const options = {
      id,
    };

    console.log(options);

    return this.http.delete(this.url, { body: options });
  }
}
