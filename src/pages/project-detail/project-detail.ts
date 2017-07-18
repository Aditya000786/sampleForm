import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import {WeekModel} from '../../models/WeekModel';
import{ProjectModel} from '../../models/ProjectModel';
import {ConversionProvider} from '../../providers/conversion/conversion';
/**
 * Generated class for the ProjectDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'projectDetail'
})
@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html',
})

export class ProjectDetailPage implements OnInit {
  project=new ProjectModel('','','','','','',0,0,0,[]);
  index:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController,
  public conversionProvider:ConversionProvider) {
  }
     ngOnInit(){
       this.project=this.navParams.get('project');
       console.log("Project="+this.project);
       console.log("Project.name="+this.project.name);
       this.project.name=this.navParams.get('name');
       this.project.clientName=this.navParams.get('clientName');
       this.project.aboutProject=this.navParams.get('aboutProject');
       this.project.startDate=this.navParams.get('startDate');
       this.project.endDate=this.navParams.get('endDate');
       this.project.weeks=this.navParams.get('weeks');
       this.index=this.navParams.get('index');
       console.log("index="+this.index);
       console.log("Project.Weeks="+this.project.weeks);
    
  //   let lastWeek=diff%7;
  //   console.log("Number Of weeks="+numberOfWeeks);
  //   console.log("Last Week="+lastWeek);


  //   let project=this.navParams.get('project');


  //   console.log("Project.Name="+project.name);
  //   for(let i=0;i<numberOfWeeks;i++){
  //     let week=new WeekModel();
  //     this.project.weeks.push(week);
  //   }
   }

  goToWeekDetail(week:WeekModel){
    console.log(week);
    // this.navCtrl.push('weekDetail',{week});
    // console.log("Week.name="+week.name);
    // console.log("Week.startDate="+week.startDate);
    // console.log("Week.days="+week.days);
    this.navCtrl.push('weekDetail',{name:week.name,startDate:week.startDate,days:week.days});
  }

  detail(week){
    console.log("Week="+week);
    const actionSheet=this.actionSheetCtrl.create({
    title:'Details',
    buttons:[
      {
        text:'Total Time: '+this.conversionProvider.getHours(week.totalSeconds)+'Hrs '+
        this.conversionProvider.getMinutes(week.totalSeconds)+' Min '+
        this.conversionProvider.getSeconds(week.totalSeconds)+' Sec',
        // role:'cancel'
      },
      {
        text:'Charged Time: '+this.conversionProvider.getHours(week.chargedSeconds)+'Hrs '+
        this.conversionProvider.getMinutes(week.chargedSeconds)+' Min '+
        this.conversionProvider.getSeconds(week.chargedSeconds)+' Sec',
        // role:'cancel'
      },
      {
        text:'UnCharged Time: '+this.conversionProvider.getHours(week.unChargedSeconds)+'Hrs '+
        this.conversionProvider.getMinutes(week.unChargedSeconds)+' Min '+
        this.conversionProvider.getSeconds(week.unChargedSeconds)+' Sec',
        role:'cancel'
      }
    ]
  });
  actionSheet.present();
  }
  

  getWeekTotalTime(week:WeekModel):number{
    let sum=0;
    for(let i=0;i<week.days.length;i++){
      // console.log("In For Loop")
      sum+=week.days[i].totalSeconds;
      // console.log("Sum="+sum);
    }
    return sum;
  }

  getWeekChargedTime(week:WeekModel):number{
    let sum=0;
    for(let i=0;i<week.days.length;i++){
      // console.log("In For Loop")
      sum+=week.days[i].chargedSeconds;
      // console.log("Sum="+sum);
    }
    return sum;
  }

  getWeekunChargedTime(week:WeekModel):number{
    let sum=0;
    for(let i=0;i<week.days.length;i++){
      // console.log("In For Loop")
      sum+=week.days[i].unChargedSeconds;
      // console.log("Sum="+sum);
    }
    return sum;
  }



  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProjectDetailPage');
  }

  ionViewDidEnter(){
    let startDateString=this.project.startDate+" 00:00:00";
    let endDateString=this.project.endDate+" 00:00:00";
    let startDate=new Date(startDateString);
    let endDate=new Date(endDateString);
    let date1=startDate.getTime();
    let date2=endDate.getTime();
    let diff=Math.abs(date2-date1);
    let oneDay=1000*60*60*24;
    diff=Math.round(diff/oneDay);
    let numberOfWeeks=Math.floor(diff/7);
    
    for(let i=0;i<=numberOfWeeks;i++){
      this.project.weeks[i].totalSeconds=this.getWeekTotalTime(this.project.weeks[i]);
      this.project.weeks[i].chargedSeconds=this.getWeekChargedTime(this.project.weeks[i]);
      this.project.weeks[i].unChargedSeconds=this.getWeekunChargedTime(this.project.weeks[i]);
    }
    // console.log("project.weeks[0].totalSeconds="+this.project.weeks[0].totalSeconds);
    // console.log("project.weeks[0].chargedSeconds="+this.project.weeks[0].chargedSeconds);
    // console.log("project.weeks[0].totalSeconds="+this.project.weeks[0].unChargedSeconds);
    // while(this.project.weeks!=null){
      
    // }
  }

}
