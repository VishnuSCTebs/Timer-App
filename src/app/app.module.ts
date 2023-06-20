import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayComponent } from './timer/timer-display/timer-display.component';
import { TimerControlComponent } from './timer/timer-control/timer-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerDisplayComponent,
    TimerControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
