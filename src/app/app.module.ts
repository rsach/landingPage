import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start-page/start-page.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';


import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ChangeLogComponent,
    FeaturesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
