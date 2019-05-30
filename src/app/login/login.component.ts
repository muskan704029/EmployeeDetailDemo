import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userid : string;
   pass : string;
   result : string;
  constructor() {
    this.userid="test";
    this.pass="test";
    this.result="";
   }
  doShowDetails() : void{
   this.result = this.userid+"  "+this.pass;
   }
  ngOnInit() {
  }

}
