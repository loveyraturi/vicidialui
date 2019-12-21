import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { CampaingService } from 'app/services/campaing.service';
import { GroupService } from 'app/services/group.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.css']
})
export class ServeyComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  loginInfo: Login = {
    user_name: null,
  }
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder,
    private campaignService: CampaingService) { }

  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    this.createForm
  }

  private createForm(): void {

    this.registerform = new FormGroup({
      campaign: new FormGroup({
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
        allowed_campaigns: new FormControl('', Validators.required)

      })
    });
  }

}
