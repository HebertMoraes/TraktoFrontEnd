import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningBackgroundPageComponent } from './opening-background-page/opening-background-page.component';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { ModuleContentComponent } from './module-content/module-content.component';



@NgModule({
  declarations: [
    OpeningBackgroundPageComponent,
    ModuleContentComponent
  ],
  imports: [
    CommonModule, 
    ComponentesComunsModule,
  ]
})
export class OpeningPageModule { }
