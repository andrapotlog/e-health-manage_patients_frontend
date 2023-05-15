import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePatientsComponent } from './components/delete-patient/delete-patients.component';
import { DisplayPatientsComponent } from './components/display-patients/display-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPatientComponent,
    UpdatePatientComponent,
    DeletePatientsComponent,
    DisplayPatientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
