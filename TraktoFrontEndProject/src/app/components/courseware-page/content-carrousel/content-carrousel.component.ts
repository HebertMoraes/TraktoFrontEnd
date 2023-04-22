import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-carrousel',
  templateUrl: './content-carrousel.component.html',
  styleUrls: ['./content-carrousel.component.sass']
})
export class ContentCarrouselComponent {

  @Input() weeksTxt!: string;
  @Input() tittleTxt!: string;
  @Input() subTittleTxt!: string;
  @Input() btnRightTxt!: string;
  @Input() btnRightColor!: string;
  @Input() btnRightColorTxt!: string;
  @Input() btnRightIconPath!: string;
  
  @Output() clickedBtnRight = new EventEmitter();

  backOnWeeks(){
    console.log('teste1');
  }

  forwardOnWeeks(){
    console.log('teste2');
  }
}
