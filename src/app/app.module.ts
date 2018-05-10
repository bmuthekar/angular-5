import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import { MessageComponent } from './message/message.component';
import {MessageService} from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewHeroComponent } from './new-hero/new-hero.component'


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponentComponent,
    MessageComponent,
    DashboardComponent,
    NewHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
