import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public username;
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router) {
    this.fetchGroups()
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
  }
  create(value: any) {
    this.userService.createUser(value).subscribe(
      data => {
        localStorage.setItem("user_name", data.name);
        localStorage.setItem("phone_number", data.phoneNumber);
        if (data.status) {
          this.router.navigateByUrl('showUser');

        }

      })
  }

  fetchGroups(){
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups=data
        console.log(data)

      })
  }

}
