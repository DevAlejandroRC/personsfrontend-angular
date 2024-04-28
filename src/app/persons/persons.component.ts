import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styles: []
})
export class PersonsComponent implements OnInit {

  persons:Person[] = [];

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(
      (fetchPersons: Person[]) => {
        //Cargamos los datos de persona obtenidos en arreglo local
        this.persons = fetchPersons;
        this.personService.setPersons(this.persons);
        console.log("Personas obtenidas del subscribe: "+ this.persons);
      }
    );
  }

  toGoAdd(){
    console.log("Ir a agregar");
    this.router.navigate(['./persons/add']);
  }

}
