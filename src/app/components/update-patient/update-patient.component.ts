import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as fromPatientsModel from '../../store/patients.model';
import { UpdateService } from '../../store/updatePatients/update.service';

interface Gender {
  value: fromPatientsModel.Gender;
}

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css'],
})
export class UpdatePatientComponent implements OnInit {
  phoneNumberLength = 10;

  minPassword = 8;

  genders: fromPatientsModel.Gender[] = [
    fromPatientsModel.Gender.female,
    fromPatientsModel.Gender.male,
  ];

  form = new FormGroup({
    idPatient: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),

    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z- ]+$'),
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z- ]+$'),
    ]),

    genderControl: new FormControl<Gender | null>(null, Validators.required),

    birthdate: new FormControl<Date | null>(null, Validators.required),

    address: new FormControl('', [
      Validators.required,
      //Validators.pattern('^[A-Za-z]+$'),
    ]),

    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(this.phoneNumberLength),
      Validators.maxLength(this.phoneNumberLength),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor(private updateService: UpdateService) {}

  ngOnInit(): void {}

  onSubmit() {
    //console.log(this.form.controls);
    this.updateService
      .updatePatient(
        // @ts-ignore
        this.form.controls.idPatient.value,
        {
          // @ts-ignore
          first_name: this.form.controls.firstName.value,
          // @ts-ignore
          last_name: this.form.controls.lastName.value,
          // @ts-ignore
          gender: this.form.controls.genderControl.value,
          // @ts-ignore
          birthdate: this.form.controls.birthdate.value,
          // @ts-ignore
          address: this.form.controls.address.value,
          // @ts-ignore
          phone_number: this.form.controls.phoneNumber.value,
        }
      )
      .subscribe((res) => console.log(res));
  }

  unavailableDays(date: Date | null): boolean {
    return date ? date < new Date() : true;
  }
}
