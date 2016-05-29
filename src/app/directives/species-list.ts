import {Component, Input, OnInit} from 'angular2/core';


@Component({
  selector: 'species-list',
  template: `
  <ul>
    <li *ngFor="#species of endangeredSpecies">{{species}}</li>
  </ul>
  `
})
export class SpeciesList implements OnInit{

  @Input() endangeredSpecies: string[];

  constructor() {

  }

  ngOnInit() {

  }


}


