import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './components/login-page/login-page.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OpeningPageModule } from './components/opening-page/opening-page.module';
import { CoursewarePageModule } from './components/courseware-page/courseware-page.module';
import { AuthInterceptor } from './security/auth.interceptor';

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
  providers: [
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:AuthInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
