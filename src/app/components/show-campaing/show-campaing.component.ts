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
  loginInfo:Login={user_name:null,
}
public campaings;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router) { 
    this.fetchCampaing();
   
   // this.phonenumber=localStorage.getItem("phone_number")
    
  }
  ngOnInit() {
     
      this.username= localStorage.getItem("user_name")
      this.loginInfo.user_name=this.username;
      console.log(this.username)

  }

  fetchCampaing(){
    this.campaingService.fetchCampaing().subscribe(
      data => {
        this.campaings=data
        console.log(data)

      })
  }
  updateCampaing(id){
    console.log("%$#@%$@#$",id)
    localStorage.setItem("update_campaing_id",id);
    this.router.navigateByUrl("/updateCampaing")
  }
  cloneCampaing(id){
    console.log("%$#@%$@#$",id)
    localStorage.setItem("clone_campaing_id",id);
    this.router.navigateByUrl("/cloneCampaing")
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
