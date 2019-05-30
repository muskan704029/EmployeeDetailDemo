import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './model/User';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userlist: Array<User>;
  constructor(public http: HttpClient) {
    this.userlist = new Array<User>();
  }
  getUsers(): Observable<User[]> {
    let url="http://localhost:6677/user/get";
       return this.http.get<User[]>(url);
     }
  doSave(user : User): Observable<String> {
    let url="http://localhost:6677/user/create";
    return this.http.post<any>(url,user,httpOptions)
    .pipe(
         catchError(err => this.handleError(err))
    );
  }
  handleError(arg0: string): any {
    throw new Error("Error postng data!!." + arg0);
  }

}
