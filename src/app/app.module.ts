import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ExperienceComponent } from './components/experience/experience.component';

import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ rootReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    })
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
