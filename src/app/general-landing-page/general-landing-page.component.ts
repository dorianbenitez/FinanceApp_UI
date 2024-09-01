import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-landing-page',
  templateUrl: './general-landing-page.component.html',
  styleUrls: ['./general-landing-page.component.css']
})
export class GeneralLandingPageComponent {

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/loginPage']); // Adjust this route to your login page
  }

  navigateToSignUp() {
    this.router.navigate(['/adduser']); // Adjust this route to your sign-up page
  }
}
