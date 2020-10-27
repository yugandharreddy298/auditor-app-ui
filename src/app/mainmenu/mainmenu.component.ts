import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private route:Router) { }
role:any
  ngOnInit() {
    this.role=localStorage.getItem('user')
    this.role=JSON.parse(this.role)
    console.log(this.role.user.role)
    this.role=this.role.user.role
  }
  Logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('loginDate')
    this.route.navigate([''])
  }
}
