import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { ReadComponent } from './read/read.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const routes: Routes = [
  {path:'employee/read' , component:ReadComponent},
  {path:'employee/create' , component:CreateEmpComponent},
  {path:'employee/delete' , component:DeleteEmpComponent},
  {path:'employee/update' , component:UpdateEmpComponent},
  {path:'' ,redirectTo:'employee/read' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
