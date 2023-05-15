import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as fromPatientsModel from '../../store/patients.model';
import { RegisterService } from '../../store/registerPatients/register.service';

interface Gender {
  value: fromPatientsModel.Gender;
}

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css'],
})
export class RegisterPatientComponent implements OnInit {
  phoneNumberLength = 10;

  termsAndConditions = false;

  minPassword = 8;

  genders: fromPatientsModel.Gender[] = [
    fromPatientsModel.Gender.female,
    fromPatientsModel.Gender.male,
  ];

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z- ]+$'),
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z- ]+$'),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minPassword),
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

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  onSubmit() {
    //console.log(this.form.controls);
    this.registerService
      .addPatient({
        // @ts-ignore
        first_name: this.form.controls.firstName.value,
        // @ts-ignore
        last_name: this.form.controls.lastName.value,
        // @ts-ignore
        email: this.form.controls.email.value,
        // @ts-ignore
        password: this.form.controls.password.value,
        // @ts-ignore
        gender: this.form.controls.genderControl.value,
        // @ts-ignore
        birthdate: this.form.controls.birthdate.value,
        // @ts-ignore
        address: this.form.controls.address.value,
        // @ts-ignore
        phone_number: this.form.controls.phoneNumber.value,
      })
      .subscribe((res) => console.log(res));
  }

  unavailableDays(date: Date | null): boolean {
    return date ? date < new Date() : true;
  }
}
