import { Component } from '@angular/core';

@Component({
  selector: 'app-login-frame',
  templateUrl: './login-frame.component.html',
  styleUrls: ['./login-frame.component.sass']
})
export class LoginFrameComponent {

  ngOnInit() {
    
  }

  startAuthentication(){
    window.alert("alo teste");
  }

}
