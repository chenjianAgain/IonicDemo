import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import quotes from "../../data/quotes";

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {

    quoteCollection: { category: string, quotes: Quote[], icon: string }[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillLoad() {
      console.log('ionViewWillLoad FavoritesPage');
  }

  ionViewWillEnter() {
      console.log('ionViewWillEnter FavoritesPage');
  }

  ngOnInit() {
      this.quoteCollection = quotes;
  }
}
