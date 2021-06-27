import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-recharging',
  templateUrl: './recharging.component.html',
  styleUrls: ['./recharging.component.css']
})
export class RechargingComponent implements OnInit {
  group = localStorage.getItem("group");
  userName = localStorage.getItem("user_name");
  level = localStorage.getItem("level");
  public modelClass = "modal";
  paymentAmount;
  private groupName
  private amount
  private myDate;
  private message;
  groups=[];
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.loginInfo.user_name = this.userName
    this.myDate = new Date();
    this.fetchGroups()
    if(parseInt(this.level)!=10){
      this.router.navigateByUrl("home")
    }

  }
  ngOnInit() {

  }
  fetchGroups(){
    this.groupService.fetchGroups().subscribe(
      data => {
        
        this.groups=data
        console.log(data)

      })
  }
  modelClick() {
    this.modelClass = "modalDisplay"
  }
  closeModal() {
    this.modelClass = "modal"
    this.router.navigateByUrl("home")
  }
  submit(){
    var request={
      rechargeAmount: this.amount,
      groupName: this.groupName
    }
    this.groupService.addBalance(request).subscribe(response=>{
      if(response.status="true"){
          this.message="SuccessFully Made Payment"
          this.modelClick();
      }
    })
  }
}