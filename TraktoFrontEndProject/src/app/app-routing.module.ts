import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBackgroundPageComponent } from './login-page/login-background-page/login-background-page.component';

const routes: Routes = [
  { path: '', component: LoginBackgroundPageComponent },
  // { path: 'user-account', component: UserAccountComponent},
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
