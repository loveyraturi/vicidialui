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
  public group;
  public campaing;
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
    this.group=localStorage.getItem("group")
    this.campaing=localStorage.getItem("campaing")
    
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
        console.log("#########5",data)
        this.campaings=data
        this.campaings = this.campaings.filter(item => {
          console.log(item.user_group == this.group)
          if (item.name == this.campaing) {
            return item
          }
        })
        if (this.level == 7) { 
          this.campaings = this.campaings.map(item => {
            if (item.active == "Y") {
              item.enable = true
            } else {
              item.enable = false
            }
            return item
          })
        }else{
        this.campaings = this.campaings.map(item => {
          if (item.active == "Y") {
            item.enable = true
          } else {
            item.enable = false
          }
          return item
        })
      }
        

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
    var req={
      campaign_name: name,
      active: this.active
    }
    this.campaingService.updateCampaingStatus(id,this.active).subscribe(
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
