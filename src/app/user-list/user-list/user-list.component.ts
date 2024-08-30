import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe({
      next: (data) => {
        console.log('Fetched users:', data);
        this.users = data; // Assign fetched data to the users array
      },
      error: (error) => {
        console.error('Error fetching users:', error); // Handle errors
      },
    });
  }
}