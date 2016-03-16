import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Rx';


@Injectable()
export class Backend {

  getEndangeredMamals() {

    return Observable.create(observer => {

      observer.next(['Rhino', 'Tiger', 'Elephant']);
      observer.complete();

    })
  }

  getEndageredBirds() {

    return Observable.create(observer => {
      setTimeout(function () {
        observer.next(['Giant ibis', 'New Caledonian owlet-nightjar', 'California condor']);
        observer.complete();
      }, 500)

    })
  }


  getEndangeredSpecies() {
    let list;
    var that = this;

    return Observable.create(observer => {

      Observable.forkJoin(

        that.getEndangeredMamals(),
        that.getEndageredBirds()

      ).subscribe(data => {
        list = data[0];
        list.push.apply(list, data[1]);
        observer.next(list);
        observer.complete();

      });
    });
  }

}
