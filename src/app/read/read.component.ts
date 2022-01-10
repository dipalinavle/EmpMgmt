import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { EmployeeData } from '../employee-entry';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  empData:EmployeeData;
  getEmpSubsciption;
  empId;
  formData:FormGroup;
  empForm:FormGroup;
  constructor(private empApi:EmployeeDataService) { }

  ngOnInit(): void {
    this.formData= new FormGroup({
      empId: new FormControl(""),
    });
    this.empForm= new FormGroup({
      firstName: new FormControl(""),
      surName: new FormControl(""),
      email: new FormControl(""),
      DOB: new FormControl(""),
      gender: new FormControl(""),
    });
  }
  onClickSubmit(data:any){
    this.empId=data.empId;
    console.log("emp id  :" + this.empId);
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
    console.log("submit clicked");
  }

}
