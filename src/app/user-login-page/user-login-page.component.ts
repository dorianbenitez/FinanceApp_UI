import { Component } from '@angular/core';
// import { UploadUser } from '../model/uploadUser';
import { UserService } from '../services/user-service.service';
import { UserLogin } from '../model/userLogin';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {

  user : UserLogin = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.login(this.user).subscribe({
      next: (response) => {
        console.log('User logged in successfully:', response); // Success message
        alert('User logged in successfully!');
      },
      error: (error) => {
        console.error('Error logging in for user:', error); // Error handling
        alert('Error logging in for user.');
      },
    });
  }
}
