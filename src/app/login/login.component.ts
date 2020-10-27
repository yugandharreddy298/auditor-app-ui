import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,private userService:UserService) { }
  loginForm:any
  errormsg:any
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  userLogin(userdata){
    if (userdata.valid) {
      const obj: any = {
        email: userdata.value.username,
        password: userdata.value.password,
      };
      this.userService.userLogin(obj).subscribe((data:any)=>{
        console.log(data.token)
        if(data && data.token){
          console.log("jjjjjjjjjjjj")
        this.router.navigate(['/user/dashboard']);
        localStorage.setItem('user',JSON.stringify(data))
        localStorage.setItem('loginDate', JSON.stringify(new Date()))
        }else{
          this.errormsg=data.message;
          
        }
    
      },
      err => {
        console.log('error: ', err);
          // this.errormsg=err.error.message;
        

      })
    }
  }

}
