import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Backend} from "../services/backend.service";
import {SpeciesList} from "../directives/species-list";



@Component({

  selector: 'home',
  providers: [ Backend ],
  pipes: [],
  styles: [require('./home.css')],
  template: require('./home.html'),
  directives: [ SpeciesList ]
})
export class Home {

  private endangeredSpecies = [];

  constructor(private backend:Backend) {

  }

  loadSpecies() {
    this.backend.getEndangeredSpecies()
      .subscribe(
        resp => this.endangeredSpecies = resp);

  }


}
