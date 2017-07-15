

/*
  Generated class for the ConversionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

export class ConversionProvider {

  getHours(seconds:number):number{
    let t1=0;
    let minutes=seconds;
    while(1){
    minutes=Math.floor(minutes/60);
    if(minutes<60){
      break;
    }
    t1++;
    }
  return t1;
  }
  
  getMinutes(seconds:number):number{
    // console.log("seconds="+seconds);
    let minutes=seconds;
    while(1){
      minutes=(minutes/60);
    if(minutes<60){
      // console.log("If Condition Satisfied");
      break;
    }
    if(minutes>=60){
      minutes-=60;
    }
    if(minutes<60){
      // console.log("If Condition Satisfied");
      break;
    }
    // if(minutes<60){
    //   break;
    // }
    // minutes-=60;
    }
  // console.log("minutes="+minutes);
    return Math.floor(minutes);
  }

  getSeconds(seconds:number):number{
    return(Math.floor(seconds%60));
  }

  
}
