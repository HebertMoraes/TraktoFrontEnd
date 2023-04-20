import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-content',
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.sass']
})
export class ModuleContentComponent {

  @Input() circleBgPath!: string;
  @Input() imageCenterPath!: string;
  @Input() textTittle!: string;
  @Input() colorDivisorTittle!: string;
}
