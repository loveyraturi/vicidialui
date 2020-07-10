import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-show-breakTypes',
  templateUrl: './show-breakTypes.component.html',
  styleUrls: ['./show-breakTypes.component.css']
})
export class ShowBreakTyoesComponent implements OnInit {
  public username;
  public currentElementIndex=1;
  public active;
  public level;
  public group;
  public hasAccess=false;
  loginInfo:Login={user_name:null,
}
public breakTypes;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router) { 
    this.fetchBreakTypes();
   
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

  fetchBreakTypes(){
    this.campaingService.fetchBreakTypes().subscribe(
      data => {
        this.breakTypes=data.breakType
        console.log(this.breakTypes)

      })
  }
  addNew(){
    this.router.navigateByUrl("/breaktype")
  }
}
