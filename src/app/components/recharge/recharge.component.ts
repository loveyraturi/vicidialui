import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  group = localStorage.getItem("group");
  userName = localStorage.getItem("user_name");
  public modelClass = "modal";
  paymentAmount;
  private myDate;
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.loginInfo.user_name = this.userName
    this.myDate = new Date();
  }
  ngOnInit() {

  }
  schedulePayment() {
    var request = {
      paymentAmount: this.paymentAmount,
      group: this.group,
      user: this.userName
    }
    this.groupService.paymentSchedule(request).subscribe(response => {
      if (response.status == "true") {
        this.modelClick();
      }
    })
  }
  modelClick() {
    this.modelClass = "modalDisplay"
  }
  closeModal() {
    this.modelClass = "modal"
    this.router.navigateByUrl("home")
  }
}