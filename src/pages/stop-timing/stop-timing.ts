 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController } from 'ionic-angular';

/**
 * Generated class for the StopTimingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'stop'
})
@Component({
  selector: 'page-stop-timing',
  templateUrl: 'stop-timing.html',
})
export class StopTimingPage {
    
    totalSec:number=0;
    chargedSec:number=0;
    unChargedSec:number=0;
    
    totalTimeHrs:number=0;
    chargedTimeHrs:number=0;
    unChargedTimeHrs:number=0;
    totalTimeMin:number=0;
    chargedTimeMin:number=0;
    unChargedTimeMin:number=0;
    totalTimeSec:number=0;
    chargedTimeSec:number=0;
    unChargedTimeSec:number=0;

    totalTimeRestore:number=0;
    chargedTimeRestore:number;
    unChargedTimeRestore:number;
    // hours: any;
    // minutes: any;
    // seconds: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
  public alertController:AlertController) {
  }

  public convertToNumber(event):number{
    return +event;
  }
  ionViewDidLoad() {
    // let minutes=Math.floor(value/60);
    // let hours=Math.floor(minutes/60);
    // let seconds=Math.floor(value%60);

    
    
    // let value=parseInt(this.navParams.get('totalTime'));
    // let t1=0;
    // let minutes=value;
    // while(1){
    // minutes=Math.floor(minutes/60);
    // if(minutes<60){
    //   break;
    // }
    // t1++;
    // }
    // let seconds=Math.floor(value%60);

    // this.totalTimeMin=minutes
    // this.totalTimeHrs=t1;
    // this.totalTimeSec=Math.floor(value%60);
    
    this.totalSec=parseInt(this.navParams.get('totalTime'));
    let t1=0;
    let minutes=this.totalSec;
    while(1){
      minutes=Math.floor(minutes/60);
    if(minutes<60){
      break;
    }
    t1++;
    }
    let seconds=Math.floor(this.totalSec%60);

    this.totalTimeMin=minutes;
    this.totalTimeHrs=t1;
    this.totalTimeSec=seconds;

    this.chargedTimeHrs=this.totalTimeHrs;
    this.chargedTimeMin=this.totalTimeMin;
    this.chargedTimeSec=this.totalTimeSec;

    this.totalTimeRestore=this.totalSec;
    this.chargedTimeRestore=this.chargedSec;
    this.unChargedTimeRestore=this.unChargedSec;
    // Working code
    // let t1=parseInt(this.navParams.get('totalTime'));
    // this.totalTime = t1; 
    // this.chargedTime=this.totalTime;
    // this.unchargedTime=0;
    // this.totalTimeRestore=this.totalTime;
    // this.chargedTimeRestore=this.chargedTime;
    // this.unchargedTimeRestore=this.unchargedTime;
 
        // this.minutes = Math.floor(this.elapsedTime / 60);
        // this.hours = Math.floor(this.minutes / 60);
        // this.seconds = Math.floor(this.elapsedTime % 60);
    // console.log('ionViewDidLoad StopTimingPage');
  }

  submitTime(){
    console.log(this.totalTimeHrs,typeof this.totalTimeHrs);
    this.totalSec=this.totalTimeHrs*60*60+this.totalTimeMin*60+this.totalTimeSec;
    this.chargedSec=this.chargedTimeHrs*60*60+this.chargedTimeMin*60+this.chargedTimeSec;
    this.unChargedSec=this.unChargedTimeHrs*60*60+this.unChargedTimeMin*60+this.unChargedTimeSec;
    
    

    // console.log(totalSec,typeof totalSec);
    // console.log(chargedSec, typeof chargedSec);
    // console.log(unChargedSec, typeof unChargedSec);

    let sum1=this.totalSec;
    let sum2=this.chargedSec+this.unChargedSec;

    if(sum1!=sum2){
        let alert=this.alertController.create({
        title:'Oops',
        subTitle:'You have messed up with calculation',
        buttons:['Ok']
      });
      alert.present();       
      this.totalSec=this.totalTimeRestore;
      this.chargedSec=this.chargedTimeRestore;
      this.unChargedSec=this.unChargedTimeRestore;
    }
    console.log("totalSec="+this.totalSec);
    console.log("charged="+this.chargedSec);
    console.log("uncharged="+this.unChargedSec);
    let time={total:this.totalSec,charged:this.chargedSec,uncharged:this.unChargedSec}
    this.viewCtrl.dismiss(time);

    // var sum11=""+this.totalTime;
    // let chargedTime1=""+this.chargedTime;
    // let unchargedTime1=""+this.unchargedTime;
    // let chargedTime11=parseInt(chargedTime1);
    // let unchargedTime11=parseInt(unchargedTime1);
    // let sum1=parseInt(sum11);
    // let sum2=chargedTime11+unchargedTime11;





    // if(sum1!=sum2){

    //   let alert=this.alertController.create({
    //     title:'Oops',
    //     subTitle:'You have messed up with calculation',
    //     buttons:['Ok']
    //   });
    //   alert.present();
    //   this.totalTime=this.totalTimeRestore;
    //   this.unchargedTime=this.unchargedTimeRestore;
    //   this.chargedTime=this.chargedTimeRestore;
    // }
    // let time={total:this.totalTime,charged:this.chargedTime,uncharged:this.unchargedTime}
//    this.viewCtrl.dismiss(time);


    // this.viewCtrl.dismiss();
  }

}
