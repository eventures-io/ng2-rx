import {Http, Headers, RequestOptions} from "angular2/http";
import {Injectable} from "angular2/core";
import {Jsonp} from "angular2/http";


@Injectable()
export class AuthService {

  constructor(private jsonp: Jsonp) {

  }

  authenticate() {

    let body = 'grant_type=client_credentials';
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic VWtkc09Qb0pTTWlaUTR0ZVJGVldYZEZvbTpzRU1iRkNWMXUzU1FydWFKSlZQTERsd1hPV2RPUXJZNlU4RXBnaWNOZlhlcjJXMUgzeg=='
    });
    let options = new RequestOptions({headers: headers});

    this.jsonp.post('https://api.twitter.com/oauth2/token', body, options)
      .map(res => res.json().data)
      .subscribe(res => {
        localStorage.setItem('id_token', res);
        console.log(JSON.stringify(res))
      },    err => console.error(err))
  }

}
