import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NgForm } from "@angular/forms";
import {ProjectProvider} from '../../providers/project/project';

import {WeekModel} from '../../models/WeekModel';
/**
 * Generated class for the EditProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'editProject'
})
@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html',
})
export class EditProjectPage implements OnInit{
  date:string;
  mode:string='New';
  constructor(public navCtrl: NavController, public navParams: NavParams,public projectProvider:ProjectProvider) {

  }
  ngOnInit(){
    this.mode=this.navParams.get('mode');
  }
  addProject(form:NgForm){
    let startDateString=form.value.startDate+" 00:00:00";
    let endDateString=form.value.endDate+" 00:00:00";

    let startDate=new Date(startDateString);
    let endDate=new Date(endDateString);

    let date1=startDate.getTime();
    let date2=endDate.getTime();
    let diff=Math.abs(date2-date1);
    
    let oneDay=1000*60*60*24;
    diff=Math.round(diff/oneDay);
    diff++;
    let numberOfWeeks=Math.floor(diff/7);
    let lastWeek=diff%7;
    console.log("Number Of weeks="+numberOfWeeks);
    console.log("Last Week="+lastWeek);
    
    let weeks:WeekModel[]=[];
    let i=0;

    for(i=0;i<numberOfWeeks;i++){

      let name="Week "+(i+1);
      var nextDate=new Date(startDate);

      console.log("NextDate="+nextDate);
      
      let week=new WeekModel(name,nextDate,7);
      
      console.log("Week.name="+week.name);
      console.log("Week.StartDate="+week.startDate);
      
      startDate.setDate(startDate.getDate()+7);
      // nextDate.setDate(startDate.getDate()+7*(i+1));

      console.log("Week.name="+week.name);
      console.log("Week.StartDate="+week.startDate);
      weeks.push(week);  
  }
  
    if(lastWeek>0){
      let name="Week "+(i+1);
      let week=new WeekModel(name,startDate,lastWeek);
      console.log("Week="+week);
      weeks.push(week);
    }
    console.log("Weeks="+weeks);

    this.projectProvider.addProject(form.value.name,form.value.clientName,form.value.aboutProject,form.value.startDate,
    form.value.endDate,weeks);
    this.navCtrl.pop();
  }
}
