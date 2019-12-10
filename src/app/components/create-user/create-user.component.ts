import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public username;
  loginInfo:Login={user_name:null,
}
  constructor() { 
    
   
   // this.phonenumber=localStorage.getItem("phone_number")
    
  }
  ngOnInit() {
     
      this.username= localStorage.getItem("user_name")
      this.loginInfo.user_name=this.username;
      console.log(this.username)
  }

}
