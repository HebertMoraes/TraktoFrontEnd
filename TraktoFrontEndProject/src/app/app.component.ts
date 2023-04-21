import { Component } from '@angular/core';
import { UserConfig } from './entities/user-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TraktoFrontEndProject';

  userConfig!: UserConfig;
}
