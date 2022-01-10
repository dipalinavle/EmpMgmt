import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { EmpDetailFormComponent } from './emp-detail-form/emp-detail-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateEmpComponent,
    UpdateEmpComponent,
    DeleteEmpComponent,
    EmpDetailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
