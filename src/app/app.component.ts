import { Component } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeManagemnt';
  createBtn:boolean=false;
  readBtn:boolean=false;
  updateBtn:boolean=false;
  deleteBtn:boolean=false;
  constructor(private router:Router){}
  goToCreate(){
    this.createBtn=true;
    this.readBtn=false;
    this.updateBtn=false;
    this.deleteBtn=false;
    this.router.navigate(['/employee/create']);
  }
  goToRead(){
    this.createBtn=false;
    this.readBtn=true;
    this.updateBtn=false;
    this.deleteBtn=false;
    this.router.navigate(['/employee/read']);
  }
  goToUpdate(){
    this.createBtn=false;
    this.readBtn=false;
    this.updateBtn=true;
    this.deleteBtn=false;
    this.router.navigate(['/employee/update']);
  }
  goToDelete(){
    this.createBtn=false;
    this.readBtn=false;
    this.updateBtn=false;
    this.deleteBtn=true;
    this.router.navigate(['/employee/delete']);
  }
}
