import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadUser } from 'src/app/model/uploadUser';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: UploadUser = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  };

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.save(this.user).subscribe({
      next: (response) => {
        console.log('User added successfully:', response); // Success message
        alert('User added successfully!');

        this.resetForm();
      },
      error: (error) => {
        console.error('Error adding user:', error); // Error handling
        alert('Error adding user.');
      },
    });
  }

  resetForm(): void {
    this.user = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    };
  }
}