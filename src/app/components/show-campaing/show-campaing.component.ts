import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-show-campaing',
  templateUrl: './show-campaing.component.html',
  styleUrls: ['./show-campaing.component.css']
})
export class ShowCampaingComponent implements OnInit {
  public username;
  public currentElementIndex=1;
  public active;
  public level;
  public hasAccess=false;
  loginInfo:Login={user_name:null,
}
public campaings;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router) { 
    this.fetchCampaing();
   
   // this.phonenumber=localStorage.getItem("phone_number")
    
  }
  ngOnInit() {
    this.level = localStorage.getItem("level")
    if (this.level == 9) {
        this.hasAccess=true;
    }
      this.username= localStorage.getItem("user_name")
      this.loginInfo.user_name=this.username;
      console.log(this.username)

  }

  fetchCampaing(){
    this.campaingService.fetchCampaing().subscribe(
      data => {
        this.campaings=data
        this.campaings = this.campaings.map(item => {
          if (item.active == "Y") {
            item.enable = true
          } else {
            item.enable = false
          }
          return item
        })
        console.log(this.campaings)

      })
  }
  showSurvey(id){
    localStorage.setItem("survey_campaing_id",id);
    this.router.navigateByUrl("/surveyCampaing")
  }
  updateCampaing(id){
    localStorage.setItem("update_campaing_id",id);
    this.router.navigateByUrl("/updateCampaing")
  }
  cloneCampaing(id){
    console.log("%$#@%$@#$",id)
    localStorage.setItem("clone_campaing_id",id);
    this.router.navigateByUrl("/cloneCampaing")
  }
  onChange(event,id) {
    console.log("###############", event)
    if (event) {
      this.active = "Y"
    } else {
      this.active = "N"
    }
    var req={
      campaign_id: id,
      active: this.active
    }
    this.campaingService.updateCampaingStatus(req).subscribe(
      data => {
        this.fetchCampaing()
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
