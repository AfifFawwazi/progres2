import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'

import { FooterComponent } from './footer/footer.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

import { ItemComponent } from './horoscope/item/item.component';
import { DetailComponent } from './horoscope/detail/detail.component';
import { ItemsComponent } from './horoscope/item/items/items.component'
import { AboutComponent } from './about/about.component';
import { KomentarComponent } from './horoscope/komentar/komentar.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HoroscopeComponent,
      ArticleComponent,
      ItemComponent,
      ItemsComponent,
      DetailComponent,
      HomeComponent,
      AboutComponent,
      KomentarComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
