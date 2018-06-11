import { SingleRoomPage } from './../single-room/single-room';
import { RoomsearchPage } from './../roomsearch/roomsearch';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JobsProvider} from '../../providers/jobs/jobs';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
rooms = [];
count ;
max_guests =2;
room_type='comfort';

  constructor(public navCtrl: NavController, public jobs: JobsProvider) {

  }

  // get values from select options
  getSelected_guests(e) { // guests
    this.max_guests = e.target.value;
  }

  getSelected_room(e) { //  rooms
     this.room_type = e.target.value;
  }

  // search rooms
  findrooms() {

   const q =this.rooms.filter((elem) =>
     elem.room.details.class.toLowerCase() === this.room_type.toLowerCase()
       &&  elem.room.details.max_guests === Number(this.max_guests)
       &&  elem.room.details.isActive === false  );
   console.log(q);
   const rooms = q;

   this.navCtrl.push(RoomsearchPage, {rooms: rooms, room_type: this.room_type, guests: this.max_guests});


  }

  // view room details
  view (event) {
    this.jobs.get_single(event)
              .subscribe(data =>
                {
                  console.log(data);
                  this.navCtrl.push(SingleRoomPage, {room: data});
                }
              );
  }




  ionViewDidLoad() {
      this.jobs.get_rooms()
                                  .subscribe(res => {
                                 this.rooms  = res['data'];
                                 this.count = res['count']
                                 console.log(this.rooms);
                                 console.log(this.count);

                                  });

}

}
