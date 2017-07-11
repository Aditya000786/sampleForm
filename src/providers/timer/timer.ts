// import {ProjectModel} from '../../model/project';
import {DateModel} from '../../models/DateModel';
 export class TimerProvider {
   timerActive:boolean=false;
//   projectActive:boolean;
   timerInterval:any;

   startTimer(day:DateModel){
     day.dayActive=true;
     this.timerActive=true
//     project.active=true;
//     this.projectActive=true;

     this.timerInterval=setInterval(()=>{
      //  project.projectTime++;
      day.totalSeconds++;},1000);
   }
//     },1000);
// }

   stopTimer(day:DateModel){
     clearInterval(this.timerInterval);
//     project.projectActive=false;
      day.dayActive=false;
      this.timerActive=false;
//     this.projectActive=false;
    this.timerInterval=false;
   }
 }