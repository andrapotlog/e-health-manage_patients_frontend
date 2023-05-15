import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../../store/displayPatients/display.service';

import * as fromModel from '../../store/patients.model';

@Component({
  selector: 'app-display-patients',
  templateUrl: './display-patients.component.html',
  styleUrls: ['./display-patients.component.css'],
})
export class DisplayPatientsComponent implements OnInit {
  downloaded = false;

  patients: fromModel.PatientName[] = [];

  displayedColumns: string[] = ['first_name', 'last_name'];

  patientsList = [
    { first_name: 'Andra', last_name: 'Potlog' },
    { first_name: 'Andrei', last_name: 'Schmidt' },
  ];

  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {}

  downloadPatients() {
    this.downloaded = true;
    this.displayService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
}
