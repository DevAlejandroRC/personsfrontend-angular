import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';


const routes: Routes = [
  {path: "", component: PersonsComponent},
  {path: "persons", component: PersonsComponent, children:[
    {path: "add", component: SubmissionFormComponent},
    {path: ":idperson", component: SubmissionFormComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
