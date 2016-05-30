import {Injectable} from "angular2/core";
import {Observable} from 'rxjs/Rx';

export class SpeciesGroups {
  groups:[
    'amphibians',
    'birds',
    'fish',
    'invertebrates',
    'mammals',
    'reptiles']

}

export class Species {

  constructor(public name:string, public group:string, public origin:string) {

  }

  print() {
    return 'name: ' + this.name + ', group: ' +  this.group;
  }

}

@Injectable()
export class Backend {


  getEndangeredMamals() {

    return Observable.create(observer => {
      observer.next([new Species('Rhino', 'Mamal', 'Africa'), new Species('Tiger', 'Mamal', 'Africa'), new Species('Elephant', 'Mamal', 'Africa')]);
      observer.complete();
    });
  }

  getEndageredBirds() {

    return Observable.create(observer => {
      setTimeout(function () {
        observer.next([new Species('Giant ibis', 'Bird', 'Europe'), new Species('New Caledonian owlet-nightjar', 'Bird', 'New-Caledonia'), new Species('California condor', 'Bird', 'America')]);
        observer.complete();
      }, 300)
    });
  }


  getEndangeredSpeciesByForkJoin() {
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


//s() {
//    this.http.get('./customer.json')
//        .map((res:Response) => {
//            this.customer = res.json();
//            return this.customer;
//        })
//        .flatMap((customer) => this.http.get(customer.contractUrl))
//        .map((res:Response) => res.json())
//        .subscribe(res => this.contract = res);
//}


//  this.userData.getUserPhotos('123456').flatMap(data => {
//  this.userPhotos = data;
//  return this.userData.getUserInfo();
//}).subscribe(data => {
//  this.userInfo = data;
//});

//myService.findAll()
//  // First call
//  .flatMap(response => {
//    return myService.findSpecific(response.something);
//  }).subscribe(response => {
//  // result from second API call
//});


  getEndangeredSpeciesByFlatMap() {
    let list;
    var that = this;
    return Observable.create(observer => {
      that.getEndangeredMamals()
        .flatMap(data => {
          list = data;
          return that.getEndageredBirds()
        })
        .subscribe(data => {
          list.push.apply(list, data);
          console.log(JSON.stringify(list));
          observer.next(list);
          observer.complete();
        });

    })

  }

}
