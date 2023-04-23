import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

  @ViewChild('scrollHorizontal') scrollHorizontal!: ElementRef;

  backOnWeeks(){
    this.scrollHorizontal.nativeElement.scrollLeft -= 100;
  }

  forwardOnWeeks(){
    this.scrollHorizontal.nativeElement.scrollLeft += 100;
  }
}
