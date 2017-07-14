import {DateModel} from './DateModel';
export class WeekModel{
    constructor(public name:string,public startDate:Date,public numberOfDays:number,public days:DateModel[]=[]){
        // console.log("startDate="+startDate);
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        
        for(let i=0;i<numberOfDays;i++){
            var currentDate=new Date(startDate);
            let day=new DateModel(weekday[currentDate.getDay()],currentDate);
            startDate.setDate(startDate.getDate()+1);
            days.push(day);
        }
        startDate.setDate(startDate.getDate()-numberOfDays);    
        
        // console.log("startDate="+startDate);
    }
}