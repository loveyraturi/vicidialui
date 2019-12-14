import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  public active;
  public username;
  public currentElementIndex = 1;
  loginInfo: Login = {
    user_name: null,
  }
  public users;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router) {
    this.fetchUsers();

    // this.phonenumber=localStorage.getItem("phone_number")

  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)

  }

  fetchUsers() {
    this.userService.fetchUser().subscribe(
      data => {
        this.users = data
        this.users = this.users.map(item => {
          if (item.active == "Y") {
            item.enable = true
          } else {
            item.enable = false
          }
          return item
        })
        console.log(this.users)

      })
  }
  updateUser(id) {
    console.log(this.active, "%$#@%$@#$", id)
    localStorage.setItem("update_id", id);
    this.router.navigateByUrl("/updateUser")
  }
  onChange(event,id) {
    console.log("###############", event)
    if (event) {
      this.active = "Y"
    } else {
      this.active = "N"
    }
    var req={
      user_id: id,
      active: this.active
    }
    this.userService.updateUserStatus(req).subscribe(
      data => {
        this.fetchUsers()
      })
     
  }
  cloneUser(id) {
    console.log("%$#@%$@#$", id)
    localStorage.setItem("clone_id", id);
    this.router.navigateByUrl("/cloneUser")
  }
  addNew() {
    this.router.navigateByUrl("/createUser")
  }

}
