import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeleteService } from '../../store/deletePatient/delete.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patients.component.html',
  styleUrls: ['./delete-patients.component.css'],
})
export class DeletePatientsComponent implements OnInit {
  form = new FormGroup({
    idPatient: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor(private deleteService: DeleteService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.controls);
    this.deleteService
      .deletePatient(
        // @ts-ignore
        this.form.controls.idPatient.value
      )
      .subscribe((res) => console.log(res));
  }
}
