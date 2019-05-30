import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;
  constructor(public userService: UserService) {
    this.users = new Array<User>();

  }

  ngOnInit() {   
    this.getUsers();
 // interval(1000).subscribe((t) => this.getUsers());
  }
  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.userService.userlist = users;
      console.log(users);    
    });;

  }
}
