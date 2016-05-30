import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Backend} from "../services/backend.service";
import {SpeciesList} from "../directives/species-list";
import {SpeciesDetail} from "../directives/species-detail";



@Component({
  selector: 'home',
  providers: [ Backend ],
  pipes: [],
  styles: [require('./home.css')],
  template: require('./home.html'),
  directives: [ SpeciesList, SpeciesDetail ]
})
export class Home {

  private endangeredSpecies = [];
  private speciesDetail: string;

  constructor(private backend:Backend) {

  }

  loadSpecies() {
    this.backend.getEndangeredSpeciesByFlatMap()
      .subscribe(
        resp => this.endangeredSpecies = resp);

  }

  showDetail($event) {
    this.speciesDetail = $event;
  }

}
