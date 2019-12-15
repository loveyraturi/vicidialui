import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-campaing',
  templateUrl: './update-campaing.component.html',
  styleUrls: ['./update-campaing.component.css']
})
export class UpdateCampaingComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public name;
  public phonenumber;
  public status;
  public groupId;
  public campaign_id;
  public campaign_name;
  public campaign_description;
  public user_group;
  public web_form_address;
  public allow_closers;
  public hopper_level;
  public auto_dial_level;
  public next_agent_call;
  public local_call_time;
  public campaign_script;
  public get_call_launch;
  public active;

  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  public groupName;
  public campaingById;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchGroups()

    this.fetchCampaingById(localStorage.getItem("update_campaing_id"));
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm()
  }
  update(value: any) {
    this.campaingService.updateCampaing(value).subscribe(
      data => {
        console.log(data)

      })
  }

  fetchGroups() {
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups = data
        console.log("groupdata#######", data)

      })
  }

  fetchCampaingById(id) {
    this.campaingService.fetchCampaingsById(id).subscribe(
      data => {
        this.campaingById = data[0]
        console.log("%$#%$#%$", this.campaingById)
        this.campaign_id = this.campaingById.campaign_id
        this.campaign_name = this.campaingById.campaign_name
        this.campaign_description = this.campaingById.campaign_description
        this.user_group = this.campaingById.user_group
        this.web_form_address = this.campaingById.web_form_address
        this.allow_closers = this.campaingById.allow_closers
        this.hopper_level = this.campaingById.hopper_level
        this.auto_dial_level = this.campaingById.auto_dial_level
        this.next_agent_call = this.campaingById.next_agent_call
        this.local_call_time = this.campaingById.local_call_time
        this.campaign_script = this.campaingById.campaign_script
        this.get_call_launch = this.campaingById.get_call_launch
        this.active = this.campaingById.active
        console.log(this.campaign_id,"camoaingdi")
      })
     

  }
  private createForm(): void {

    this.registerform = new FormGroup({
      campaign: new FormGroup({
        campaign_id:  new FormControl('', [Validators.required]),
        campaign_name: new FormControl('', [Validators.required]),
        campaign_description: new FormControl('', Validators.required),
        web_form_address: new FormControl('', Validators.required),
        user_group: new FormControl('', Validators.required),
        hopper_level: new FormControl('', Validators.required),
        allow_closers: new FormControl('', Validators.required),
        auto_dial_level: new FormControl('', Validators.required),
        local_call_time: new FormControl('', Validators.required),
        next_agent_call: new FormControl('', Validators.required),
        get_call_launch: new FormControl('', Validators.required),
        campaign_script: new FormControl('', Validators.required),
        active: new FormControl('', Validators.required),

      }),
      group: new FormGroup({
        user_group: new FormControl('', Validators.required),
        group_name: new FormControl('', Validators.required),
        allowed_campaigns: new FormControl('', Validators.required),

      })
    });

  }

  submit({ value }: any): void {
    console.log(value)
    this.update(value);
    
  }

}
