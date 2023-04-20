import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBackgroundPageComponent } from './login-page/login-background-page/login-background-page.component';
import { OpeningBackgroundPageComponent } from './opening-page/opening-background-page/opening-background-page.component';
import { CoursewareBackgroundPageComponent } from './courseware-page/courseware-background-page/courseware-background-page.component';

const routes: Routes = [
  { path: 'login', component: LoginBackgroundPageComponent },
  { path: 'abertura', component: OpeningBackgroundPageComponent},
  { path: 'materiais-didaticos', component: CoursewareBackgroundPageComponent},
  
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
