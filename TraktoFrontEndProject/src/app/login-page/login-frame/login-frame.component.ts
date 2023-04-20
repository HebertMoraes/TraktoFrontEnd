import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-frame',
  templateUrl: './login-frame.component.html',
  styleUrls: ['./login-frame.component.sass']
})
export class LoginFrameComponent {

  formLogin!: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder) {
    this.formLogin = this.createFormLogin();
  }

  ngOnInit() {

  }

  public createFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  submitAuthentication() {

    const { email, password } = this.formLogin.value;
    this.formLogin.reset;

    this.userService.signInWithEmailPassword(email, password).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['abertura']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
