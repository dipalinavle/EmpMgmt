import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDataService } from '../employee-data.service';
import { CreateEmpComponent } from './create-emp.component';

describe('CreateEmpComponent', () => {
  let component: CreateEmpComponent;
  let empServiceStub:Partial<EmployeeDataService>;
  let fixture: ComponentFixture<CreateEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpComponent ],
      providers:[{provide:EmployeeDataService, useValue:empServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
