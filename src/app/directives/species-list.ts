import {Component, Input, Output, EventEmitter, } from 'angular2/core';
import {Species} from "../services/backend.service";


@Component({
  selector: 'species-list',
  template: `
  <ul>
    <li *ngFor="#species of endangeredSpecies" (click)="showDetail(species)">{{ species.name }}</li>
  </ul>
  `,
   styles:[`

   ul {
     list-style: none;

   }

   li {
     corner-radius: 4px;
     background-color: lightgrey;
     margin: 5px;
     padding: 15px;
   }

   li:hover {
     cursor: pointer;
     background-color: grey;
   }

   `]
})
export class SpeciesList{

  @Input() endangeredSpecies: Species[];
  @Output() requestDetail: EventEmitter<Species> = new EventEmitter<Species>();

  constructor() {

  }

  showDetail(species: Species) {
    this.requestDetail.emit(species);

  }

}


