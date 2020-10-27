import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public isAuthenticated() {
    const token = localStorage.getItem('user');
    return token;
  }

  serverurll='http://localhost:9000'
  userLogin(data){
    return this.http.post(this.serverurll +'/users/login',data)
  }

  getAllusers(skip,limit){
    return this.http.get(this.serverurll +'/users/audit?skip='+skip+'&limit='+limit)
  }
}
