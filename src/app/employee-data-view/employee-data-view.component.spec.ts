import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataViewComponent } from './employee-data-view.component';

describe('EmployeeDataViewComponent', () => {
  let component: EmployeeDataViewComponent;
  let fixture: ComponentFixture<EmployeeDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
