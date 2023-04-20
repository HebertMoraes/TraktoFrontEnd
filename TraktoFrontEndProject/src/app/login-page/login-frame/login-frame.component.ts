import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-frame',
  templateUrl: './login-frame.component.html',
  styleUrls: ['./login-frame.component.sass']
})
export class LoginFrameComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {

  }

  // async ngOnInit() {

  //   this.form = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     sigla: ['', Validators.required]
  //   });
  // }

  submitAuthentication() {

    // this.userService.signInWithEmailPassword(this.form.value)
    //   .subscribe(() => {
    //     //this.alertService.success('Department added', { keepAfterRouteChange: true });
    //     this.router.navigate(['../'], { relativeTo: this.route });
    //   });
  }

}
