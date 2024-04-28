import { Injectable } from "@angular/core";
import { Person } from "./person.model";
import { DataService } from "./data-service";

@Injectable()
export class PersonService {

    persons: Person[] = [];
    
    constructor(private dataService: DataService) {  }

    getPersons(){
        return this.dataService.loaderPersons();
    }
    
    setPersons(persons: Person[]){
        this.persons = persons;
    }

    findPerson(id: number) {
        const person: Person = this.persons.find( person => person.idperson == id );
        console.log("Persona encontrada:"+person.idperson+" - "+person.name);
        return person;
    }

    addPerson(person: Person){
        console.log("Persona a agregar:"+ person.name);
        this.dataService.addPerson(person)
            .subscribe(
                (person: Person) => {
                    //Recuperaos la persona con el idperson mediante el objeto recien agregado
                    console.log("Se agrea al arreglo perona reciente insertada en subscribe "+ person.idperson)
                    this.persons.push(person);
                }
            );
    }

    modifyPerson(id: number, person: Person){
        console.log("Persona a modificar:"+person.idperson);
        //actualzia objeto persona del arreglo
        const personModify = this.persons.find(person => person.idperson == id);
        personModify.idperson = person.idperson;
        personModify.name = person.name;
        //guardamos la persona en db
        this.dataService.modifyPerson(id, person);
    }

    deletePerson(id: number){
        console.log(" Eliminar persona con id:"+id);
        const index = this.persons.findIndex( person => person.idperson == id );
        this.persons.splice(index,1);
        this.dataService.deletePerson(id);
    }

}
