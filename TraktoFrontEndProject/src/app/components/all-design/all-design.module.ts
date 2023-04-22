import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDesignBackgroundPageComponent } from './all-design-background-page/all-design-background-page.component';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';



@NgModule({
  declarations: [
    AllDesignBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    ComponentesComunsModule
  ]
})
export class AllDesignModule { }
