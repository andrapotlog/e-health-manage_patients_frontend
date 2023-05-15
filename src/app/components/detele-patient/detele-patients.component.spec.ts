import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetelePatientsComponent } from './detele-patients.component';

describe('DetelePatientsComponent', () => {
  let component: DetelePatientsComponent;
  let fixture: ComponentFixture<DetelePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetelePatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetelePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
