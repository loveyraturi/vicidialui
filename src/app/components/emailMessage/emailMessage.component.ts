import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-emailMessage',
  templateUrl: './emailMessage.component.html',
  styleUrls: ['./emailMessage.component.css']
})
export class EmailMessageComponent implements OnInit {
  group = localStorage.getItem("group");
  userName = localStorage.getItem("user_name");
  level = localStorage.getItem("level");
  public modelClass = "modal";
  paymentAmount;
  private campaingName;
  private message;
  private email;
  private password;
  private subject;
  private popupMessage
  campaings=[];
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private userService: UserService, private campaingService: CampaingService, private router: Router, private formBuilder: FormBuilder) {
    this.loginInfo.user_name = this.userName
    this.fetchCampaing()
    if(parseInt(this.level)!=10){
      this.router.navigateByUrl("home")
    }

  }
  ngOnInit() {

  }

  fetchCampaing(){
    this.campaingService.fetchActiveCampaing().subscribe(
      data => {
        
        this.campaings=data
        console.log(data)

      })
  }
  modelClick() {
    this.modelClass = "modalDisplay"
    this.popupMessage=" Email sent successfully"
  }
  closeModal() {
    this.modelClass = "modal"
    this.router.navigateByUrl("home")
  }
  submit(){
    console.log(this.message)
    console.log(this.campaingName)
    var sendEmail={
      campaingName: this.campaingName,
      message: this.message,
      email: this.email,
      password:this.password,
      subject:this.subject
    }
    this.campaingService.sendEmailBlast(sendEmail).subscribe(resp=>{
      console.log(resp)
      this.modelClick();
    })
    // var request={
    //   totalAmountPerHours: this.amount,
    //   groupName: this.groupName
    // }
    // this.groupService.setHourlyPrice(request).subscribe(response=>{
    //   if(response.status="true"){
    //       this.message="Successfully Setted Hourly Price"
    //       this.modelClick();
    //   }
    // })
  }
}