import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {TwitterService} from '../services/twitter.service'

import {Title} from '../services/title';
import {XLarge} from './directives/x-large';

@Component({

  selector: 'home',
  providers: [
    Title, TwitterService, XLarge
  ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  // Set our default values
  data = { value: '' };
  // TypeScript public modifiers
  constructor(public title: Title, private twitterService: TwitterService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);

  }

  loadTweets(){
    this.twitterService.loadEAITweets();
  }

}
