import { Component, OnInit } from '@angular/core';
import { CampaingService } from 'app/services/campaing.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groups;
  public username;
  public currentElementIndex = 1;
  public active;
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.fetchGroups();
  }
  fetchGroups() {
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups = data
        console.log(data)

      })
  }

  updateGroup(id){
    console.log("theiddddd", id)
    localStorage.setItem("update_group_id",id);
    this.router.navigateByUrl("/updateGroup")
  }
}
