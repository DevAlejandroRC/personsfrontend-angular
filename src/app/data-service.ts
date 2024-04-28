import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { Person } from "./person.model";

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient){}

    baseURL = "http://localhost:8080/PersonsBackend-Java/webservice/persons";

    loaderPersons(){
        return this.httpClient.get(this.baseURL);
    }

    addPerson(person: Person){
        return this.httpClient.post(this.baseURL, person);
    }

    modifyPerson(idperson: number, person: Person){
        let url: string;
        url = this.baseURL + "/" + idperson;
        this.httpClient.put(url,person)
            .subscribe(
                (response) => {
                    console.log("Resultado de modificar persona: " + response);
                },
                (error) =>{
                    console.error("Error al modificar persona: " + error);
                }
            );
    }

    deletePerson(idperson: number){
        let url: string;
        url = this.baseURL + "/" + idperson;
        this.httpClient.delete(url)
            .subscribe(
                (response) => {
                    console.log("Resultado de eliminar persona: " + response);
                },
                (error) =>{
                    console.error("Error al eliminar persona: " + error);
                }
            );
    }

}
