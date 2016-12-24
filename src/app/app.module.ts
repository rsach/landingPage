import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StartComponent } from './start-page/start-page.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { LoginService } from './login.service'; 

import { LoginRoutingModule } from "./app.routing";



import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MomentModule } from 'angular2-moment';







@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ChangeLogComponent,
    FeaturesComponent,
    ContactComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    ReactiveFormsModule,
    LoginRoutingModule,
    MomentModule


  ],
  providers: [
            CookieService,
            LoginService

            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
