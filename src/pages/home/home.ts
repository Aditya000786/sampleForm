import { Component,OnInit } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';
import {ConversionProvider} from '../../providers/conversion/conversion';
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
  constructor(public navCtrl: NavController,public projectProvider:ProjectProvider,public actionSheetCtrl:ActionSheetController,
  public conversionProvider:ConversionProvider) {
  }

    ionViewWillEnter(){
    this.projectProvider.getProjectList().on('value', snapshot => {
    this.projects= [];
    snapshot.forEach( snap => {
      // console.log(snap.val());
      // console.log(snap.val().week.length);
      this.projects.push({
        id: snap.key,
        name: snap.val().name,
        clientName:snap.val().clientName,
        aboutProject:snap.val().aboutProject,
        startDate:snap.val().startDate,
        endDate:snap.val().endDate,
        totalSeconds:0,
        chargedSeconds:0,
        unChargedSeconds:0,
        weeks:this.conversionProvider.getWeek(snap.val().week)
        // weeks:snap.val().week
      });
      return false
    });
  });


    if(this.projects.length==0){
      this.isThereAnyProject=false;
      // console.log(this.isThereAnyProject);
    }
    else{
      // console.log("Project.length="+this.projects.length);
      this.isThereAnyProject=true;
    }
    }

   ngOnInit(){
  //   let startDateString="2017-5-9"+" 00:00:00";
  //   let endDateString="2017-8-12"+" 00:00:00";
  //   let startDate=new Date(startDateString);
  //   let endDate=new Date(endDateString);
  //   let date1=startDate.getTime();
  //   let date2=endDate.getTime();
  //   let diff=Math.abs(date2-date1);
  //   let oneDay=1000*60*60*24;
  //   diff=Math.round(diff/oneDay);
  //   diff++;
  //   let numberOfWeeks=Math.floor(diff/7);
  //   let lastWeek=diff%7;    
  //   let weeks:WeekModel[]=[];
  //   let i=0;
  //   for(i=0;i<numberOfWeeks;i++){
  //     let name="Week "+(i+1);
  //     var nextDate=new Date(startDate);   
  //     let week=new WeekModel(name,nextDate,7);
  //     startDate.setDate(startDate.getDate()+7);
  //     weeks.push(week);
  //     console.log("week="+week);  
  // }
  //   if(lastWeek>0){
  //     let name="Week "+(i+1);
  //     let week=new WeekModel(name,startDate,lastWeek);
  //     weeks.push(week);
  //   }
  //   console.log("weeks="+weeks);   
    //  this.projectProvider.addProject2('Interns','Kanakiya Jewellers','1st Project being developed for a jeweller, excited to begin with.',
    // '2017-5-9','2017-8-12',weeks);



    //   let startDateString="2017-8-11"+" 00:00:00";
  //   let endDateString="2017-10-22"+" 00:00:00";
  //   let startDate=new Date(startDateString);
  //   let endDate=new Date(endDateString);
  //   let date1=startDate.getTime();
  //   let date2=endDate.getTime();
  //   let diff=Math.abs(date2-date1);
  //   let oneDay=1000*60*60*24;
  //   diff=Math.round(diff/oneDay);
  //   diff++;
  //   let numberOfWeeks=Math.floor(diff/7);
  //   let lastWeek=diff%7;    
  //   let weeks:WeekModel[]=[];
  //   let i=0;
  //   for(i=0;i<numberOfWeeks;i++){
  //     let name="Week "+(i+1);      
  //     let week=new WeekModel(name,startDate,7);      
  //     startDate.setDate(startDate.getDate()+7);
  //     weeks.push(week);  
  // }
  //   if(lastWeek>0){
  //     let name="Week "+(i+1);
  //     let week=new WeekModel(name,startDate,lastWeek);
  //     weeks.push(week);
  //   }
  //   for(let i=0;i<numberOfWeeks;i++){
  //   }
  //    this.projectProvider.addProject('Development','TATA Motors','1st Project being developed for a big Firm, excited to begin with.',
  //   '2017-8-11','2017-10-22',weeks);
   }
  newProject(): void{
    this.navCtrl.push('newProject',{mode:'New'});
  }  
  
  edit(project,i){
    this.navCtrl.push('editProject',{project:project,index:i});
  }
  
  detail(project){
    project.totalSeconds=this.projectProvider.getProjectTotalTime(project);
    project.chargedSeconds=this.projectProvider.getProjectChargedTime(project);
    project.unChargedSeconds=this.projectProvider.getProjectUnchargedTime(project);
    const actionSheet=this.actionSheetCtrl.create({
    title:'Details',
    buttons:[
      {
        text:'Total Time: '+this.conversionProvider.getHours(project.totalSeconds)+'Hrs '+
        this.conversionProvider.getMinutes(project.totalSeconds)+' Min '+
        this.conversionProvider.getSeconds(project.totalSeconds)+' Sec',
      },
      {
        text:'Charged Time: '+this.conversionProvider.getHours(project.chargedSeconds)+'Hrs '+
        this.conversionProvider.getMinutes(project.chargedSeconds)+' Min '+
        this.conversionProvider.getSeconds(project.chargedSeconds)+' Sec',
      },
      {
        text:'UnCharged Time: '+this.conversionProvider.getHours(project.unChargedSeconds)+'Hrs '+
        this.conversionProvider.getMinutes(project.unChargedSeconds)+' Min '+
        this.conversionProvider.getSeconds(project.unChargedSeconds)+' Sec',
        role:'cancel'
      }
    ]
  });
  actionSheet.present();
  }

  goToProject(project,index){
    this.navCtrl.push('projectDetail',{name:project.name,clientName:project.clientName,aboutProject:project.aboutProject,
    startDate:project.startDate,endDate:project.endDate,weeks:project.weeks,project:project,index:index});
  }


   ionViewDidEnter(){
      //  this.projects.push(this.projectProvider.getTempProject());
//         let startDateString="2017-5-9"+" 00:00:00";
//     let endDateString="2017-8-12"+" 00:00:00";
//     let startDate=new Date(startDateString);
//     let endDate=new Date(endDateString);
//     let date1=startDate.getTime();
//     let date2=endDate.getTime();
//     let diff=Math.abs(date2-date1);
//     let oneDay=1000*60*60*24;
//     diff=Math.round(diff/oneDay);
//     diff++;
//     let numberOfWeeks=Math.floor(diff/7);
//     let lastWeek=diff%7;    
//     let weeks:WeekModel[]=[];
//     let i=0;
//     for(i=0;i<numberOfWeeks;i++){
//       let name="Week "+(i+1);
//       var nextDate=new Date(startDate);   
//       let week=new WeekModel(name,nextDate,7);
//       startDate.setDate(startDate.getDate()+7);
//       weeks.push(week);
//       console.log("week.startDate="+week.startDate);  
//   }
//     if(lastWeek>0){
//       let name="Week "+(i+1);
//       let week=new WeekModel(name,startDate,lastWeek);
//       weeks.push(week);
//     }
//     console.log("weeks="+weeks);   
//      this.projectProvider.addProject2('Interns','Kanakiya Jewellers','1st Project being developed for a jeweller, excited to begin with.',
//     '2017-5-9','2017-8-12',weeks);
   }
 
 
  }
