import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

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

    totalTime:any=0;
    chargedTime:any;
    unchargedTime:any;
    // hours: any;
    // minutes: any;
    // seconds: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.totalTime = this.navParams.get('totalTime');
    console.log("totalTime="+this.totalTime);
    this.chargedTime=this.totalTime;
    this.unchargedTime=0;
 
        // this.minutes = Math.floor(this.elapsedTime / 60);
        // this.hours = Math.floor(this.minutes / 60);
        // this.seconds = Math.floor(this.elapsedTime % 60);
    console.log('ionViewDidLoad StopTimingPage');
  }

  submitTime(){
    this.viewCtrl.dismiss();
  }

}
