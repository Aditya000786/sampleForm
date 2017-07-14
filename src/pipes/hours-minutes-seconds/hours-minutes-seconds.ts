import { Pipe,Injectable } from '@angular/core';

/**
 * Generated class for the HoursMinutesSecondsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'hoursminutesseconds',
})
@Injectable()
export class HoursMinutesSecondsPipe {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, ...args) {
    // console.log("Value="+value);
    let t1=0;
    let minutes=value;
    while(1){
    minutes=Math.floor(minutes/60);
    if(minutes<60){
      break;
    }
    t1++;
    }
    let hours=t1;
    let seconds=Math.floor(value%60);
    // console.log(hours + "hrs, " +minutes +" mins, "+seconds +" secs");
    return hours + "hrs, " +minutes +" mins, "+seconds +" secs";
  }
}
