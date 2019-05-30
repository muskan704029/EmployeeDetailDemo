import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   fn:number;
   sn:number;
   result:number;
   
   constructor(private addservice : AddService) { 
   this.fn=0;
   this.sn=0;
   this.result=0;
  }
  doAddition(){
    //this.result=this.fn + this.sn;
    this.result=this.addservice.addition(this.fn,this.sn);
  }

  ngOnInit() {
  }

}
