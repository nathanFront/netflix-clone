import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ProfileName: any = [];

  status: boolean = true;

 
  loginForm:FormGroup = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  validator(control: AbstractControl) {
    const email = Validators.email(control)
    const number = Validators.pattern("[0-9]{10,11}")(control)
    let duplicates = Validators.pattern(/(.)\1{9,10}/)(control)

    if (email == null || (number == null && duplicates == null)) {
      return null
    } else {
      return { ...email, ...number, duplicates }
    }
  }

  ngOnInit(): void {
    this.isLogin()
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.validator]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  toggleText() {
    this.status = !this.status
  }

  ngOnSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.value) {
      this.loginService.login(this.loginForm.value).subscribe(
        (res: any) => {
          this.ProfileName = res.users;
          localStorage.setItem('token', res.token)
          console.log(this.ProfileName);
          this.router.navigate(['/user'])
        }
      )
    }
  }
  isLogin() {
    localStorage.getItem('token')
      ? this.router.navigate(['/user']) : null
  }
}
