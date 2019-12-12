import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clone-campaing',
  templateUrl: './clone-campaing.component.html',
  styleUrls: ['./clone-campaing.component.css']
})
export class CloneCampaingComponent implements OnInit {
  public username;
  public name;
  public phonenumber;
  public status;
  public groupId;
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  public groupName;
  public groupsById;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router) {
    this.fetchGroups()
    this.fetchusersById(localStorage.getItem("update_id"));
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
  }
  update(value: any) {
    this.userService.updateUser(value).subscribe(
      data => {
      console.log(data)

      })
  }

  fetchGroups(){
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups=data
        console.log(data)

      })
  }
  fetchGroupsById(id){
    this.groupService.fetchGroupsById(id).subscribe(
      data => {
       
       this.groupName=data[0].name
       this.groupId=data[0].groupid
       console.log("group#@$#@$#@34",data)

      })
  }
  fetchusersById(id) {
    this.userService.fetchusersById(id).subscribe(
      data => {
        this.groupsById=data[0]
        console.log("%$#%$#%$",this.groupsById)
        this.name = this.groupsById.name
        this.phonenumber =this.groupsById.phonenumber
        this.status =this.groupsById.status
        this.fetchGroupsById(id);

      })
  }
}
