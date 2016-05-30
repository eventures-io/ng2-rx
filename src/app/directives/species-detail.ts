import {Component, Input} from 'angular2/core';
import {Species} from "../services/backend.service";


@Component({
  selector: 'species-detail',
  template: `<div class="species-detail" *ngIf="speciesDetail"><h5>selected species: </h5>
           <ul>
            <li>Name: {{ speciesDetail.name }}</li>
            <li>Group: {{ speciesDetail.group }}</li>
            <li>Origin: {{ speciesDetail.origin }}</li>
          </ul>
         </div>`,
  styles: [`
   .species-detail {
      min-height: 100%;
      margin-top: 4px;
      padding: 10px;
      background-color: lightgrey;
   }

   .species-detail h5 {
     display: inline-block;
   }


  `]
})
export class SpeciesDetail {

  @Input() speciesDetail:Species;


}
