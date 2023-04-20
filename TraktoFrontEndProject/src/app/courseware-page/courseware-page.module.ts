import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursewareBackgroundPageComponent } from './courseware-background-page/courseware-background-page.component';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';



@NgModule({
  declarations: [
    CoursewareBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    ComponentesComunsModule
  ]
})
export class CoursewarePageModule { }
