export enum Gender {
  male = 'Male',
  female = 'Female',
}

export enum TermsAndConditions {
  yes = 'Y',
  no = 'N',
}

export interface PatientDetails {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  gender: Gender;
  birthdate: Date;
  address: string;
  phone_number: string;
}

export interface Patients {
  patients: PatientName[];
}

export interface PatientName {
  first_name: string;
  last_name: string;
}
