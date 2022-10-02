import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { ProfileComponent } from './profile/profile.component';
import { QtySelectorComponent } from './qty-selector/qty-selector.component';
import { WeekComponent } from './week/week.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    ProfileComponent,
    QtySelectorComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
