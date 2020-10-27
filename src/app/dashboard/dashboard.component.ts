import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users= [];
  p:any
  constructor(private userService:UserService) { }

  ngOnInit() {
    // console.log("hiiiiiiiiiiiiii")
    this.getAllUsers(0,3)
    // alert()
  }
getAllUsers(skip,limit){
this.userService.getAllusers(skip,limit).subscribe((data:any)=>{
  console.log(data)
  this.users=[...data,...this.users]
})
}
next(event){
  this.p=event
  var skip=this.users.length;
  this.getAllUsers(skip,3)

}
}
