import {Jsonp} from "angular2/http";
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class TwitterService {

  constructor(private jsonp:Jsonp, private http: Http) {

  }

  loadEAITweets() {

    let headers = new Headers({'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALWYuAAAAAAAwCPYEZjJFSU9lGhCEFBHQy6GU%2BY%3DXsTSxZ7fD0khZjACYFnS6tlHoTOutBZDiQSNA1gCsdomkGhHnt'});
    let options = new RequestOptions({headers: headers});

    this.jsonp.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=EIAinvestigator&format=json&callback=JSONP_CALLBACK', options)
      .subscribe(
        resp => console.log(resp),
        err => console.error(err)
      );
  }


}
