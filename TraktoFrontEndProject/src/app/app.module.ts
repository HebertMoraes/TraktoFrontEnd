import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login-page/login-page.module';

import { HttpClientModule } from '@angular/common/http';
import { OpeningPageModule } from './opening-page/opening-page.module';
import { CoursewarePageModule } from './courseware-page/courseware-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LoginPageModule, 
    HttpClientModule, 
    OpeningPageModule, 
    CoursewarePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
