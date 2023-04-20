import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input() colorBackground!: string;
  @Input() colorOfElements!: string;
  @Input() icon1Path!: string;
  @Input() icon2Path!: string;
  @Input() icon3Path!: string;
  @Input() iconProfilePath!: string;
  @Input() icon4Path!: string;
}
