import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-scheduleEmail',
  templateUrl: './scheduleEmail.component.html',
  styleUrls: ['./scheduleEmail.component.css']
})
export class ScheduleEmailComponent implements OnInit {
  group = localStorage.getItem("group");
  userName = localStorage.getItem("user_name");
  level = localStorage.getItem("level");
  public modelClass = "modal";
  paymentAmount;
  private campaingName
  private amount
  private scheduleType;
  private to;
  private statusValue;
  campaings = [];
  statuses = [];
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.loginInfo.user_name = this.userName
    this.fetchCampaings()
    if (parseInt(this.level) != 10) {
      this.router.navigateByUrl("home")
    }

  }
  ngOnInit() {

  }
  fetchStatusByCampaing(campaingName) {
    this.campaingService.fetchStatus(campaingName).subscribe(response => {
      this.statuses=response.statusFeedback.split(",")
      console.log(this.statuses);
    })
  }
  campaingEvent(campaingName) {
    console.log(campaingName)
    this.fetchStatusByCampaing(campaingName)
  }
  fetchCampaings() {
    this.campaingService.fetchActiveCampaing().subscribe(
      data => {

        this.campaings = data
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
  submit() {
    var request = {
      to: this.to,
      campaing: this.campaingName,
      status: this.statusValue,
      scheduleType: this.scheduleType
    }
    this.campaingService.scheduleCornJob(request).subscribe(response=>{
      console.log(response);
    })
  }
}