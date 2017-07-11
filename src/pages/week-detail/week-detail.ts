import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {WeekModel} from '../../models/WeekModel';
/**
 * Generated class for the WeekDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'weekDetail'
})
@Component({
  selector: 'page-week-detail',
  templateUrl: 'week-detail.html',
})
export class WeekDetailPage implements OnInit {
  
  week:WeekModel=new WeekModel('',new Date(),7);
  ngOnInit(){
    this.week.name=this.navParams.get('name');
    this.week.startDate=this.navParams.get('startDate');
    this.week.days=this.navParams.get('days');
    console.log("week detail");
    // this.week=this.navParams.data;
    console.log("WEEK="+this.week);
    console.log("week.name="+this.week.name);
    console.log("week.startDate="+this.week.startDate);
    console.log("week.days="+this.week.days);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeekDetailPage');
  }

}
