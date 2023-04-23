import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'login', component: LoginBackgroundPageComponent },
//   { path: 'abertura', component: OpeningBackgroundPageComponent},
//   { path: 'materiais-didaticos', component: CoursewareBackgroundPageComponent},
//   { path: 'ver-todos-materiais', component: AllDesignBackgroundPageComponent},
  
//   { path: '**', redirectTo: 'login' }
// ];

const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () => import('./components/login-page/login-page.module')
      .then(m => m.LoginPageModule)
  }, 
  { 
    path: 'abertura',
    loadChildren: () => import('./components/opening-page/opening-page.module')
      .then(m => m.OpeningPageModule)
  }, 
  { 
    path: 'materiais-didaticos',
    loadChildren: () => import('./components/courseware-page/courseware-page.module')
      .then(m => m.CoursewarePageModule)
  }, 
  { 
    path: 'ver-todos-materiais',
    loadChildren: () => import('./components/all-design-page/all-design-page.module')
      .then(m => m.AllDesignPageModule)
  }, 
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
