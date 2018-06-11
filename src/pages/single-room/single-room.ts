import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-single-room',
  templateUrl: 'single-room.html',
})
export class SingleRoomPage {
singleroom;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleRoomPage');
    this.singleroom = this.navParams.get('room');


    console.log(this.singleroom);

  }

}
