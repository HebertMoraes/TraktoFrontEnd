import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-frame',
  templateUrl: './login-frame.component.html',
  styleUrls: ['./login-frame.component.sass']
})
export class LoginFrameComponent {

  formLogin!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
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

    this.authService.signInWithEmailPassword(email, password).subscribe(
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
