import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data-service';
import { PersonService } from './person-service';
import { PersonsComponent } from './persons/persons.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    SubmissionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
