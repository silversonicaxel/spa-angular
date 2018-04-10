import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, Experience } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  experience: Observable<Experience>;

  constructor(private store: Store<AppState>) {
    this.experience = this.store.select('experience');
  }

  
};
