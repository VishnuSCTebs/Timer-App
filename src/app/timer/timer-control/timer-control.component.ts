import { Component,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent {
  @Input('isStarted') isStarted:boolean= false;
  @Output() startEvent=new EventEmitter<any>();
  @Output() stopEvent=new EventEmitter<any>();
  @Output() resetEvent=new EventEmitter<any>();
  handleStart(){
    this.startEvent.emit();
  }

  handleStop(){
    this.stopEvent.emit();
  }

  handleReset(){
    this.resetEvent.emit();
  }

}
