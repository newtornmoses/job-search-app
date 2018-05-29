
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JobsProvider} from '../../providers/jobs/jobs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
jobsArray = {};
  constructor(public navCtrl: NavController, public jobs: JobsProvider) {

  }

  ionViewDidLoad() {
    this.jobs.getIndeed_data()
    .subscribe(data => {
      console.log(data);
      this.jobsArray = data;
    })


}

}
