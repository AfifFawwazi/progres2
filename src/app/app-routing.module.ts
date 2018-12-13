import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HoroscopeComponent } from './horoscope/horoscope.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[
    { path:'', redirectTo:'/home',pathMatch:'full'},
    { path:'home', component:HomeComponent},
    { path:'horoscopes', component:HoroscopeComponent},
    { path:'article',component:ArticleComponent},
    { path:'about',component:AboutComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}
