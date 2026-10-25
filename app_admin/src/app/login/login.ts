import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  public formCredentials = {
    name: '',
    email: '',
    password: ''
  };

  public errorMessage = '';

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.errorMessage = '';

    if (!this.formCredentials.email || !this.formCredentials.password) {
      this.errorMessage = 'All fields are required';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    const user: User = {
      name: this.formCredentials.name,
      email: this.formCredentials.email
    };

    this.authenticationService.login(
      user,
      this.formCredentials.password
    );

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/trips']);
    } else {
      setTimeout(() => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigate(['/trips']);
        }
      }, 3000);
    }
  }
}
 
