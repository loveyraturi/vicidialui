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
  public level;
  public campaing;
  public group;
  public hasAccess=false;
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router) { }

  ngOnInit() {
    this.level = localStorage.getItem("level")
    this.campaing=localStorage.getItem("campaing")
    this.group=localStorage.getItem("group")
    console.log(this.level,"$#$%$")
    if (this.level == 9) {
        this.hasAccess=true;
    }
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.fetchGroups();
  }
  deleteGroup(name){
    this.groupService.deleteGroup(name).subscribe(response=>{
      this.fetchGroups();
    })
  }
  fetchGroups() {
    this.groupService.fetchGroupsWithCampaings().subscribe(
      data => {
        var responseData=[]
        
        data.forEach(element => {
          var campaingAssignes=","
          element.campaingList.forEach(item => {
          campaingAssignes= item.campaingname+campaingAssignes
        });
        
           responseData.push({
            name: element.groupName,
            status: element.status,
            campaings: campaingAssignes
          })
        });
       
        this.groups = responseData
        this.groups = this.groups.filter(item => {
          if (item.name == this.group) {
            return item
          }
        })
        console.log(this.groups)

      })
  }

  updateGroup(id){
    console.log("theiddddd", id)
    localStorage.setItem("update_group_id",id);
    this.router.navigateByUrl("/updateGroup")
  }
}
