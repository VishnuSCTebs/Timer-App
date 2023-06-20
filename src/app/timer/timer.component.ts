import { Component } from '@angular/core';
import { Timer,CountTime } from './timer.interface';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements CountTime{
    
  currentTime:Timer={
      h:0,
      m:0,
      s:0,
    };

    isActive:boolean = false;
    intervalId:any

    ngOnInit(){
      

      alert("Resumed previously saved timer")
      const savedTime=localStorage.getItem("currentTime")

      
      if(savedTime){
        this.currentTime=JSON.parse(savedTime)
      }
      if(localStorage.getItem("isActive")){
        this.isActive=Boolean(localStorage.getItem("isActive"))
    }

    if(this.isActive){
      this.start()
    }
    }

    start():void{
        this.isActive = true;
        localStorage.setItem("isActive", String(this.isActive))

        this.intervalId=setInterval(()=>{
          this.count()
        },1000)
      

    }

    pause():void{
      this.isActive = false;
      localStorage.setItem("isActive", String(this.isActive))
      clearInterval(this.intervalId);
    }


    count(){

      this.currentTime.s++;
      if(this.currentTime.s>59){
              this.currentTime.m++;
              this.currentTime.s=0;
            }
      if(this.currentTime.m>59){  
        this.currentTime.h++;
        this.currentTime.m=0;
      }
      if(this.currentTime.h>23){
        alert("Maximum time exceeded")

      }


      localStorage.setItem("currentTime", JSON.stringify(this.currentTime))



     

    }


    reset(){
      this.isActive = false;
      clearInterval(this.intervalId);
      this.currentTime={
        h:0,
        m:0,
        s:0,
      }
      localStorage.setItem("isActive", String(this.isActive))
      localStorage.setItem("currentTime", JSON.stringify(this.currentTime))

    }
  
    

    getCurrentTime():string{
        return `${this?.currentTime.h<10?'0':''}${this.currentTime?.h} : ${this?.currentTime.m<10?'0':''}${this.currentTime?.m} : ${this?.currentTime.s<10?'0':''}${this.currentTime?.s}`
    }
    

}
