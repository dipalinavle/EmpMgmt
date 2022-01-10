import { Component, SimpleChange ,OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { EmployeeData } from '../employee-entry';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss']
})
export class CreateEmpComponent implements OnInit {
  firstName:string;
  surName:string;
  email:string;
  DOB:string;
  gender:string;
  empForm:FormGroup;
  employeeEntry$:Observable<EmployeeData>;
  constructor(private empService:EmployeeDataService) { }

  ngOnInit(): void {
    this.empForm= new FormGroup({
      id:new FormControl(""),
      firstName: new FormControl("" , [Validators.required]),
      surName: new FormControl("" , [Validators.required]),
      email: new FormControl("" ,[Validators.email]),
      DOB: new FormControl(""),
      gender: new FormControl(""),
    });
  }
  onClickSubmitEmp(data:any){
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
 this.empService.addEmployeeData(empData).subscribe(data => {
   console.log(data);
 })
  }
}
