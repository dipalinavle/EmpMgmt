import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { EmployeeData } from '../employee-entry';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.scss']
})
export class DeleteEmpComponent implements OnInit {
  firstName:string;
  surName:string;
  email:string;
  DOB:string;
  gender:string;
  empForm:FormGroup;
  empData:EmployeeData;
  getEmpSubsciption;
  empId;
  formData:FormGroup;
  constructor(private empApi:EmployeeDataService) { }

  ngOnInit(): void {
    this.formData= new FormGroup({
      empId: new FormControl(""),
    });
    this.empForm= new FormGroup({
      id:new FormControl(""),
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
          console.log(this.empData.id);
          this.empForm.controls['id'].setValue(this.empData.id);
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
    this.firstName=data.firstName;
    this.surName=data.surName;
    this.email=data.email;
    this.DOB=data.DOB;
    this.gender=data.gender;
    let empData:EmployeeData={
      id:data.id,
      firstName:this.firstName,
      surName:this.surName,
      email:this.email,
      DOB:this.DOB,
      gender:this.gender
    }
 this.empApi.deleteEmployeeData(empData.id).subscribe(data => {
   console.log(data);
          this.empForm.controls['firstName'].setValue('');
          this.empForm.controls['surName'].setValue('');
          this.empForm.controls['email'].setValue('');
          this.empForm.controls['DOB'].setValue('');
          this.empForm.controls['gender'].setValue('');
 })
  }

}
