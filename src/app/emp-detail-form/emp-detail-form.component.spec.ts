import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailFormComponent } from './emp-detail-form.component';

describe('EmpDetailFormComponent', () => {
  let component: EmpDetailFormComponent;
  let fixture: ComponentFixture<EmpDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
