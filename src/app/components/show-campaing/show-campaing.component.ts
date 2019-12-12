import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-campaing',
  templateUrl: './show-campaing.component.html',
  styleUrls: ['./show-campaing.component.css']
})
export class ShowCampaingComponent implements OnInit {
  public username;
  public currentElementIndex=1;
  loginInfo:Login={user_name:null,
}
public users;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router) { 
    this.fetchUsers();
   
   // this.phonenumber=localStorage.getItem("phone_number")
    
  }
  ngOnInit() {
     
      this.username= localStorage.getItem("user_name")
      this.loginInfo.user_name=this.username;
      console.log(this.username)

  }

  fetchUsers(){
    this.userService.fetchUser().subscribe(
      data => {
        this.users=data
        console.log(data)

      })
  }
  updateUser(id){
    console.log("%$#@%$@#$",id)
    localStorage.setItem("update_campaing_id",id);
    this.router.navigateByUrl("/updateCampaing")
  }
  cloneUser(id){
    console.log("%$#@%$@#$",id)
    localStorage.setItem("clone_campaing_id",id);
    this.router.navigateByUrl("/cloneCampaing")
  }
  addNew(){
    this.router.navigateByUrl("/createCampaing")
  }

}
