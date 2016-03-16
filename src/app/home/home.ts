import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Backend} from "../services/backend.service";



@Component({

  selector: 'home',
  providers: [Backend],
  pipes: [],
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {


  constructor(private backend:Backend) {

  }


  endangeredSpecies = [];

  ngOnInit() {

  }

  loadSpecies() {
    this.backend.getEndangeredSpecies()
      .subscribe(
        resp => this.endangeredSpecies = resp);

  }


}
