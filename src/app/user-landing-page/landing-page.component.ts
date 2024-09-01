import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  addTransaction() {
    // Logic for adding a transaction
    console.log('Add Transaction Clicked');
  }

  manageInvestments() {
    // Logic for managing investments
    console.log('Manage Investments Clicked');
  }

  viewReports() {
    // Logic for viewing reports
    console.log('View Reports Clicked');
  }

  settings() {
    // Logic for navigating to settings
    console.log('Settings Clicked');
  }
}
