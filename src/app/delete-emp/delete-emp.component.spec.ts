import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDataService } from '../employee-data.service';
import { DeleteEmpComponent } from './delete-emp.component';

describe('DeleteEmpComponent', () => {
  let component: DeleteEmpComponent;
  let empServiceStub:Partial<EmployeeDataService>;
  let fixture: ComponentFixture<DeleteEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmpComponent ],
      providers:[{provide:EmployeeDataService , useValue:empServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
