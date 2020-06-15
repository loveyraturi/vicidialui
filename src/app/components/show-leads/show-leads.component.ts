import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-show-leads',
  templateUrl: './show-leads.component.html',
  styleUrls: ['./show-leads.component.css']
})
export class ShowLeadsComponent implements OnInit {
  public username;
  public currentElementIndex=1;
  public active;
  public level;
  public group;
  public hasAccess=false;
  loginInfo:Login={user_name:null,
}
public leads;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router) { 
    this.fetchLeadVersions();
   
   // this.phonenumber=localStorage.getItem("phone_number")
    
  }
  ngOnInit() {
    this.level = localStorage.getItem("level")
    this.group=localStorage.getItem("group")
    if (this.level == 9) {
        this.hasAccess=true;
    }
      this.username= localStorage.getItem("user_name")
      this.loginInfo.user_name=this.username;
      console.log(this.username)

  }

  fetchLeadVersions(){
    this.campaingService.fetchLeadVersions().subscribe(
      data => {
        this.leads=data

        if (this.level == 7) {
      //     this.leads = this.leads.filter(item => {
      //       console.log(item.user_group == this.group)
      //       if (item.user_group == this.group) {
      //         return item
      //       }
      //     })
          this.leads = this.leads.map(item => {
            if (item.status == "Y") {
              item.enable = true
            } else {
              item.enable = false
            }
            return item
          })
        }else{
        this.leads = this.leads.map(item => {
          if (item.status == "Y") {
            item.enable = true
          } else {
            item.enable = false
          }
          return item
        })
      }
        console.log(this.leads)

      })
  }
  showSurvey(name){
    localStorage.setItem("survey_campaing_name",name);
    this.router.navigateByUrl("/surveyCampaing")
  }
  updateCampaing(name){
    localStorage.setItem("update_campaing_name",name);
    this.router.navigateByUrl("/updateCampaing")
  }
  cloneCampaing(name){
    console.log("%$#@%$@#$",name)
    localStorage.setItem("clone_campaing_name",name);
    this.router.navigateByUrl("/cloneCampaing")
  }
  onChange(event,id) {
    console.log("###############", event)
    if (event) {
      this.active = "Y"
    } else {
      this.active = "N"
    }
console.log(id,this.active)
    this.campaingService.updateLeadStatus(id,this.active).subscribe(
      data => {
        this.fetchLeadVersions()
      })
     
  }
  deleteCampaing(id){
    this.campaingService.deleteCampaing(id).subscribe(
      data => {
        console.log(data)

      })
  }
  addNew(){
    this.router.navigateByUrl("/createCampaing")
  }

}
