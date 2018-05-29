import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import  "rxjs/add/operator/map";


/*
  Generated class for the JobsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobsProvider {
 url ="../../assets/indeedjobs.json";



  constructor(public http: HttpClient) {
    console.log('Hello JobsProvider Provider');

  }

  getIndeed_data() {
    return this.http.get( this.url);

          //  .subscribe(data => {
          //    console.log(data.results);
          //  })


  }

}
