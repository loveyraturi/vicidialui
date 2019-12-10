import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
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
