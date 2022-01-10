import { Component, OnInit ,Input } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { EmployeeData } from '../employee-entry';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-emp-detail-form',
  templateUrl: './emp-detail-form.component.html',
  styleUrls: ['./emp-detail-form.component.scss']
})
export class EmpDetailFormComponent implements OnInit {
  @Input() empId:number=0;
  empForm:FormGroup;
  empData:EmployeeData;
  constructor(private empApi:EmployeeDataService) { }

  ngOnInit(): void {
    console.log(this.empId);
    this.empForm= new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(""),
      surName: new FormControl(""),
      email: new FormControl(""),
      DOB: new FormControl(""),
      gender: new FormControl(""),
    });
    this.getEmpData();
  }
  getEmpData()
  {
    if(this.empId != null && this.empId != 0){
      this.empApi.getEmployeeDataById(this.empId).subscribe((data) => {
        this.empData=data;
        if(data){
          console.log(this.empData.firstName);
          this.empForm.controls['firstName'].setValue(this.empData.firstName);
          this.empForm.controls['surName'].setValue(this.empData.surName);
          this.empForm.controls['email'].setValue(this.empData.email);
          this.empForm.controls['DOB'].setValue(this.empData.DOB);
          this.empForm.controls['gender'].setValue(this.empData.gender);
        }
        else{
          alert("No record found");
          this.empForm.controls['firstName'].setValue('');
          this.empForm.controls['surName'].setValue('');
          this.empForm.controls['email'].setValue('');
          this.empForm.controls['DOB'].setValue('');
          this.empForm.controls['gender'].setValue('');

        }
      })
    }
  }
  onClickSubmitEmp(data:any){
    console.log(data);
  }

}
