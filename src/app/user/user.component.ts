import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user : User;  
  message : string;
 constructor(private userService : UserService) {
   this.user=new User();
    this.message="ttt";
  }
 doSave() : void{   
  this.message = "";
  this.userService.doSave(this.user).subscribe(userid => {
    console.log(userid);
            this.message = "Record is inserted with id ===> "+userid;
            this.user.id=parseInt(userid.toString());
            this.userService.userlist.push(this.user);
         },error => {
          console.log("Error From User Service : "+error);
           }
         );
    
  }
  ngOnInit() {
  }

}
