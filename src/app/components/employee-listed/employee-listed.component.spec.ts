import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListedComponent } from './employee-listed.component';

describe('EmployeeListedComponent', () => {
  let component: EmployeeListedComponent;
  let fixture: ComponentFixture<EmployeeListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
