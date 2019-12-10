/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component, Input} from "@angular/core";
import { Login } from "app/models/login";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
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