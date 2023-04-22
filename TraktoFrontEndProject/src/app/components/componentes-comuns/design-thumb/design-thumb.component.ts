import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-design-thumb',
  templateUrl: './design-thumb.component.html',
  styleUrls: ['./design-thumb.component.sass']
})
export class DesignThumbComponent {

  @Input() tittle!: string;
  @Input() urlImgThumb!: string;
  @Input() numberSlides!: number;
  @Input() idDesign!: string;

  @Output() goToEdit: EventEmitter<string> = new EventEmitter<string>();
}
