import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage:string="";
  constructor(private fb: FormBuilder,
    private router : Router,
    private http: HttpClient,) { 
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
    );
    }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      this.http.post('http://localhost:3000/api/users/login', this.loginForm.value).subscribe((
        response:any) => {
          console.log('login successful', response);
          const userId = response.user.id;
          localStorage.setItem('userID',userId);
          localStorage.setItem('user_ID',response.user.mainid);
          localStorage.setItem('username',response.user.name)
          this.router.navigate(['/dashboard',userId]);
        },
        error => {
          this.errorMessage = error.error.message;
          console.error('login failed', error);
        }
      );
    }
      
    }
  loginDash(){
    this.router.navigate(['/dashboard']);
  }
  signupCall(){
    this.router.navigate(['/signup']);
  }
}
