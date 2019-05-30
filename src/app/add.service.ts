import { Injectable } from '@angular/core';

@Injectable()
export class AddService {

  constructor() { }

  addition(fn : number,sn : number):number{
   return(fn+sn) ;
  }
}
