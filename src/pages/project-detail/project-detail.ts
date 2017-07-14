import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {WeekModel} from '../../models/WeekModel';
import{ProjectModel} from '../../models/ProjectModel';
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
  project=new ProjectModel('','','','','',[]);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }
   ngOnInit(){
     this.project.name=this.navParams.get('name');
     this.project.clientName=this.navParams.get('clientName');
     this.project.aboutProject=this.navParams.get('aboutProject');
     this.project.startDate=this.navParams.get('startDate');
     this.project.endDate=this.navParams.get('endDate');
     this.project.weeks=this.navParams.get('weeks');
  //   let startDateString=this.project.startDate+" 00:00:00";
  //   let endDateString=this.project.endDate+" 00:00:00";
  //   let startDate=new Date(startDateString);
  //   let endDate=new Date(endDateString);
  //   let date1=startDate.getTime();
  //   let date2=endDate.getTime();
  //   let diff=Math.abs(date2-date1);
  //   let oneDay=1000*60*60*24;
  //   diff=Math.round(diff/oneDay);
  //   let numberOfWeeks=Math.floor(diff/7);
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

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProjectDetailPage');
  }

}
