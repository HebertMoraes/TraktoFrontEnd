import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursewareBackgroundPageComponent } from './courseware-background-page/courseware-background-page.component';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { ContentCarrouselComponent } from './content-carrousel/content-carrousel.component';



@NgModule({
  declarations: [
    CoursewareBackgroundPageComponent,
    ContentCarrouselComponent
  ],
  imports: [
    CommonModule, 
    ComponentesComunsModule
  ]
})
export class CoursewarePageModule { }
