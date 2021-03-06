﻿import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";
import { SettingsPage } from "../pages/settings/settings";
import { SettingsService } from "../services/settings";
import { QuotesService } from "../services/quotes";
import { QuotesPage } from "../pages/quotes/quotes";
import { QuotePage } from "../pages/quote/quote";

@NgModule({
  declarations: [
      MyApp,
      FavoritesPage,
      LibraryPage,
      TabsPage,
      SettingsPage,
      TabsPage,
      QuotesPage,
      QuotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      FavoritesPage,
      LibraryPage,
      TabsPage,
      SettingsPage,
      QuotesPage,
      QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
      SettingsService,
      QuotesService
  ]
})
export class AppModule {}
