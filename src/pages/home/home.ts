import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ProjectProvider} from '../../providers/project/project';
import {ProjectModel} from '../../models/ProjectModel';
import {WeekModel} from '../../models/WeekModel';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  projects:ProjectModel[]=[];
  isThereAnyProject:boolean;
  constructor(public navCtrl: NavController,public projectProvider:ProjectProvider) {
  }
  ngOnInit(){
    let startDateString="2017-8-11"+" 00:00:00";
    let endDateString="2017-10-22"+" 00:00:00";

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



     this.projectProvider.addProject('Development','TATA Motors','1st Project being developed for a big Firm, excited to begin with.',
    '2017-8-11','2017-10-22',weeks);
  }

  newProject(): void{
    this.navCtrl.push('editProject',{mode:'New'});
  }

  ionViewDidLoad(){
    let startDateString="2017-5-9"+" 00:00:00";
    let endDateString="2017-8-12"+" 00:00:00";

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
    
    console.log("Did Load");
     this.projectProvider.addProject('Aditya','Kanakiya Jewellers','1st Project being developed for a jeweller, excited to begin with.',
    '2017-5-9','2017-8-12',weeks);
  }

  ionViewWillEnter(){
    this.projects=this.projectProvider.getProjects();
    console.log(this.projects);
    if(this.projects.length==0){
      this.isThereAnyProject=false;
    }
    else{
      this.isThereAnyProject=true;
    }
  }

  goToProject(project){
    this.navCtrl.push('projectDetail',{name:project.name,clientName:project.clientName,aboutProject:project.aboutProject,
    startDate:project.startDate,endDate:project.endDate,weeks:project.weeks,project:project});
  }

}
