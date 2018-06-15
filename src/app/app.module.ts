import { SuccessPage } from './../pages/success/success';
import { DatePicker } from '@ionic-native/date-picker';
import { CheckoutPage } from './../pages/checkout/checkout';
import { SingleRoomPage } from './../pages/single-room/single-room';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
 import { LoginPage } from './../pages/login/login';
import { JobsProvider } from '../providers/jobs/jobs';
import {RoomsearchPage} from './../pages/roomsearch/roomsearch';
import {Stripe} from '@ionic-native/stripe';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SingleRoomPage,
    RoomsearchPage,
    CheckoutPage,
    SuccessPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SingleRoomPage,
    RoomsearchPage,
    CheckoutPage,
    SuccessPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobsProvider, Stripe, DatePicker
  ]
})
export class AppModule {}
