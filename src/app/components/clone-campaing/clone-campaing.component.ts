import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clone-campaing',
  templateUrl: './clone-campaing.component.html',
  styleUrls: ['./clone-campaing.component.css']
})
export class CloneCampaingComponent implements OnInit {
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
  public dropdownlength;
  public dialPrefix;
  public manualDialPrefix;

  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  public groupName;
  public campaingById;
  private group_name;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  public isChecked = false;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchCampaing();
    this.fetchGroups()

    this.fetchCampaingByName(localStorage.getItem("clone_campaing_name"));
  }
  ngOnInit() {
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll: true,
      classes: ""
    };

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm()
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  createCampaign(value: any) {
    this.campaingService.createCampaing(value).subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl("showCampaing")
      })
  }
  checkValue(value) {
    if (value == this.isChecked) {
      if (value) {
        this.isChecked = false
      } else {
        this.isChecked = true
      }

    } else {
      this.isChecked = value
    }
    console.log(this.isChecked, "#####value333333#####")
  }
  fetchCampaing() {
    this.campaingService.fetchCampaing().subscribe(
      data => {

        data.forEach((item) => {
          var dropdownListLocal = {
            id: item.campaign_id,
            itemName: item.campaign_name
          }
          this.dropdownList.push(dropdownListLocal)
        });
        this.dropdownlength =this.dropdownList.length;
        console.log(this.dropdownList, "#$@$#@$#")

      })
  }
  fetchGroupsByUser(user_group) {
    this.groupService.fetchGroupsByUser(user_group).subscribe(
      data => {

        // this.groups = data
        console.log("groupdata#######", data[0].user_group, data[0].group_name)
        this.group_name = data[0].group_name
        if (data[0].allowed_campaigns.includes("-ALL-CAMPAIGNS-")) {
          console.log(this.dropdownList)
          this.selectedItems = this.dropdownList
        } else {
          var groupObjects = [];
          data[0].allowed_campaigns.split(" ").forEach((element, index) => {

            if (element != "") {
              if (element != "-") {
                var groupObject = {
                  id: index,
                  itemName: element
                }
                this.selectedItems.push(groupObject)
              }
            }
          });
        }
        console.log(this.selectedItems)
      })
  }

  fetchGroups() {
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups = data
        // console.log("groupdata#######", data)

      })
  }
  fetchCampaingByName(name) {
    this.campaingService.fetchCampaingByName(name).subscribe(
      data => {
        this.groupService.fetchGroupByCampaings(data.name)
        .subscribe(
          resp => {
            this.user_group=resp[0]
          })
        // this.campaingById = data[0]
        // console.log("%$#%$#%$", this.campaingById)
        this.campaign_id = data.id
        this.campaign_name = data.name
        this.dialPrefix = data.dialPrefix
        this.manualDialPrefix = data.manualDialPrefix
        // this.campaign_description = this.campaingById.campaign_description
        // this.user_group = this.campaingById.user_group
        // this.web_form_address = this.campaingById.web_form_address
        // this.allow_closers = this.campaingById.allow_closers
        // this.hopper_level = this.campaingById.hopper_level
        // this.auto_dial_level = this.campaingById.auto_dial_level
        // this.next_agent_call = this.campaingById.next_agent_call
        this.local_call_time = data.localCallTime
        // this.campaign_script = this.campaingById.campaign_script
        // this.get_call_launch = this.campaingById.get_call_launch
        this.active = data.active
        console.log(data,"DATATA#############")
      })
  }
  private createForm(): void {

    this.registerform = new FormGroup({
      campaign: new FormGroup({
        campaign_id:  new FormControl('', [Validators.required]),
        campaign_name: new FormControl('', [Validators.required]),
        campaign_description: new FormControl('', Validators.required),
        manual_dial_prefix: new FormControl('', Validators.required),
        user_group: new FormControl('', Validators.required),
        dial_prefix: new FormControl('', Validators.required),
        // allow_closers: new FormControl('', Validators.required),
        // auto_dial_level: new FormControl('', Validators.required),
        local_call_time: new FormControl('', Validators.required),
        // next_agent_call: new FormControl('', Validators.required),
        // get_call_launch: new FormControl('', Validators.required),
        // campaign_script: new FormControl('', Validators.required),
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

    var campaing_name = value.campaign.campaign_name
    value.campaign.campaign_id = campaing_name.replace(/ /g, "_");
    var localvar = ""
    console.log("##########CHELK lemngth",this.dropdownlength ,value.group.allowed_campaigns.length)
    if (this.isChecked) {
      if (this.dropdownlength == value.group.allowed_campaigns.length) {
        value.group.allowed_campaigns = "-ALL-CAMPAIGNS-"
      } else {
        value.group.allowed_campaigns.forEach(element => {
          localvar = localvar + element.id + " "

        });
        value.group.allowed_campaigns = localvar + "" + campaing_name.replace(/ /g, "_");
      }
      var group = value.group.user_group.replace(/ /g, "_");

      value.group.user_group = group;

      value.campaign.user_group = group
    } else {
      value.group = {}
    }
    console.log(value)

    this.createCampaign(value)
  }

}
