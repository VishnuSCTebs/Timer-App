import { Component,EventEmitter,Input, Output } from '@angular/core';
@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent {

  @Input('time') time:string=''
  @Input('isEnabled') isEnabled:boolean = false

  
 

}
