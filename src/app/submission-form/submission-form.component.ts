import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styles: []
})
export class SubmissionFormComponent implements OnInit {

  idperson: number;
  inputName: string;

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idperson = this.route.snapshot.params.idperson;
    console.log("recuperamos el paramero idperson: "+this.idperson);
    if(this.idperson != null){
      const person = this.personService.findPerson(this.idperson);
      if(person != null){
        this.inputName = person.name;
      }
    }
  }

  onSavePerson(){
    const savePerson = new Person(this.idperson, this.inputName);
    if(this.idperson != null)
      this.personService.modifyPerson(this.idperson, savePerson);
    else
      this.personService.addPerson(savePerson);
    this.router.navigate(["persons"]);
  }

  onDeletePerson(){
    if(this.idperson != null){
      console.log("Persona a eliminar "+this.idperson);
      this.personService.deletePerson(this.idperson);
    }
    this.router.navigate(["persons"]);
  }

}
