import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import { Experience } from '../../store/models/experience.model';
import * as ExperienceActions from '../../store/actions/experience.actions';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  public submitted = false;
  public experience: Observable<Experience>;

  public title: string;
  public subtitle: string;
  public description: string;

  constructor(private store: Store<AppState>) {
    this.experience = this.store.select('experience');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(new ExperienceActions.UpdateExperience({title: this.title, subtitle: this.subtitle, description: this.description}));
  }

  onClean() {
    this.store.dispatch(new ExperienceActions.CleanExperience());
  }
}
