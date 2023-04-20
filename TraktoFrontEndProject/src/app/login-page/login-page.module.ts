import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFrameComponent } from './login-frame/login-frame.component';
import { LoginBackgroundPageComponent } from './login-background-page/login-background-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginFrameComponent,
    LoginBackgroundPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  exports: [
    LoginFrameComponent,
    LoginBackgroundPageComponent,
  ]
})
export class LoginPageModule { }
