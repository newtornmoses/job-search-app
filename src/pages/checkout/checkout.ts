import { Stripe } from '@ionic-native/stripe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
total;
room;
room_number;
card={
  phone:'',
  name:'',
  zip:'',
  expmonth:'',
  expyear:'',
  cvc:'',
  number:''
}

card_details : any={
  expMonth:'',
  expYear:'',
  cvc:'',
  number: ''
}
token;
  constructor(public navCtrl: NavController, public navParams: NavParams, public stripe: Stripe) {
  }


  // pay
  pay() {
    // get card details;
    this.stripe.setPublishableKey('pk_test_BaS7sO9TqkPmmPjyhOPKhHvQ');
    this.stripe.createCardToken(this.card_details)
    .then(data => {
      this.token = data;
      console.log(this.token);
    })
    .catch(err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.total = this.navParams.get('amount');
    this.room = this.navParams.get('room');
    this.room_number = this.navParams.get('room_number');
  }

}
