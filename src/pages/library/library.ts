import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import quotes from "../../data/quotes";
/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }


  quoteCollection: { category: string, quotes: Quote[], icon: string }[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
      console.log('ionViewWillLoad LibraryPage');
  }

  ionViewWillEnter() {
      console.log('ionViewWillEnter LibraryPage');
  }

  ngOnInit() {
      this.quoteCollection = quotes;
  }

}
