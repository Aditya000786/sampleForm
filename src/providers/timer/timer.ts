// import {ProjectModel} from '../../model/project';
import {DateModel} from '../../models/DateModel';
 export class TimerProvider {
   timerActive:boolean=false;
//   projectActive:boolean;
   timerInterval:any;
   secondElapsed:number=0;

   startTimer(day:DateModel){
     day.dayActive=true;
     this.timerActive=true
//     project.active=true;
//     this.projectActive=true;

     this.timerInterval=setInterval(()=>{
      //  project.projectTime++;
      day.totalSeconds++;
      this.secondElapsed=day.totalSeconds;
    },1000);
      
   }
//     },1000);
// }

   stopTimer(day:DateModel):number{
     clearInterval(this.timerInterval);
//     project.projectActive=false;
      day.dayActive=false;
      // console.log("thissecondElapsed="+this.secondElapsed);
      let totalTimeElapsed=this.secondElapsed;
      // console.log("TotalTimeElapsed="+totalTimeElapsed);
      this.timerActive=false;
//     this.projectActive=false;
    this.timerInterval=false;
    this.secondElapsed=0;
    return totalTimeElapsed;
   }
 }