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
  public campaign_status;
  public auto_dial_level;
  public next_agent_call;
  public local_call_time;
  public campaign_script;
  public get_call_launch;
  public active;
  public dial_prefix;
  public manual_dial_prefix;
  public assignmentType;
  public fieldProps: any[]
  public isChecked=false;

  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  public groupName;
  public campaingById;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchGroups()

    this.fetchCampaingByName(localStorage.getItem("clone_campaing_name"));
  }
  checkValue(value) {
    console.log("filedcontent#######",this.fieldProps)
    if(value==this.isChecked){
      if(value){
        this.isChecked=false
      }else{
        this.isChecked=true
      }
   
    }else{
      this.isChecked=value
    }
    console.log(this.isChecked, "#####value333333#####")
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    // this.createForm()
  }
  // update(value: any) {
  //   // this.campaingService.updateCampaing(value).subscribe(
  //   //   data => {
  //   //     console.log(data)
  //   //     this.router.navigateByUrl("showCampaing")
  //   //   })
  // }

  fetchGroups() {
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups = data
        console.log("groupdata#######", data)

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
          console.log(data,"DATATTAT###")
          this.fieldProps=JSON.parse(data.additionalField)
          console.log(this.fieldProps)
        // this.campaingById = data[0]
        // console.log("%$#%$#%$", this.campaingById)
        this.campaign_id = data.id.toString()
        this.campaign_name = data.name
        this.dial_prefix = data.dialPrefix
        this.manual_dial_prefix = data.manualDialPrefix
        this.assignmentType=data.assignmentType
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
  // private createForm(): void {

  //   this.registerform = new FormGroup({
  //     campaign: new FormGroup({
  //       campaign_id:  new FormControl('', [Validators.required]),
  //       campaign_name: new FormControl('', [Validators.required]),
  //       assignmentType: new FormControl('', [Validators.required]),
  //       campaign_description: new FormControl('', Validators.required),
  //       manual_dial_prefix: new FormControl('', Validators.required),
  //       user_group: new FormControl('', Validators.required),
  //       dial_prefix: new FormControl('', Validators.required),
  //       // allow_closers: new FormControl('', Validators.required),
  //       // auto_dial_level: new FormControl('', Validators.required),
  //       local_call_time: new FormControl('', Validators.required),
  //       // next_agent_call: new FormControl('', Validators.required),
  //       // get_call_launch: new FormControl('', Validators.required),
  //       // campaign_script: new FormControl('', Validators.required),
  //       active: new FormControl('', Validators.required),

  //     }),
  //     group: new FormGroup({
  //       user_group: new FormControl('', Validators.required),
  //       group_name: new FormControl('', Validators.required),
  //       allowed_campaigns: new FormControl('', Validators.required),

  //     })
  //   });

  // }
  more(){
    this.fieldProps.push({
      field: '',
      label: 'Enter label name'
    });
  }

  submit() {
   

    var group
    var groupcampaingmapping
  var campaign={
    active: this.active,
    status: this.campaign_status,
    assignmentType:  this.assignmentType,
	  name: this.campaign_name,
		dial_prefix: this.dial_prefix,
		local_call_time: this.local_call_time,
		dial_timeout: "5000",
    manual_dial_prefix: this.manual_dial_prefix,
    additionalFields: this.fieldProps
  }
  if(this.user_group!=""){
    groupcampaingmapping ={
      campaingname: campaign.name,
      groupname: this.user_group
    }
  }else{
    group ={
      name: this.user_group,
      active: "Y"
    }
    console.log("CREATING GROUP INFO",group)
    this.groupService.createGroup(group).subscribe(
      data => {
        console.log(data.id,"############1")
        groupcampaingmapping ={
          campaingname: campaign.name,
          groupname: this.user_group
        }
      })
  }
  
  console.log("CREATING CAMPAING INFO",campaign)
  this.campaingService.createCampaing(campaign).subscribe(
    data => {
      console.log(data,"############2")
      console.log("CREATING GROUP CAMPAING MAPPING INFO",groupcampaingmapping)
      this.campaingService.campaingGroupMapping(groupcampaingmapping).subscribe(
        resp => {
          this.router.navigateByUrl('showCampaing');
        })

    })

      // localStorage.setItem("user_name", data.name);
      // localStorage.setItem("phone_number", data.phoneNumber);
      // if (data.status) {
      //   this.router.navigateByUrl('showCampaing');

      // }

    // })
 
  //   var campaing_name=value.campaign.campaign_name
  //   value.campaign.campaign_id=campaing_name.replace(/ /g,"_");
  //   var localvar=""
  //   if(this.isChecked){
  //   if(this.dropdownList.length==value.group.allowed_campaigns.length){
  //     value.group.allowed_campaigns="-ALL-CAMPAIGNS-"
  //   }else{
  //     value.group.allowed_campaigns.forEach(element => {
  //         localvar=localvar+element.id+" "
         
  //       });
  //       value.group.allowed_campaigns=localvar+""+campaing_name.replace(/ /g,"_");
  //   }
  //   var group= value.group.user_group.replace(/ /g,"_");
   
  //   value.group.user_group=group;
    
  //     value.campaign.user_group=group
  //   }else{
  //     value.group.update_allowed_campaigns=campaing_name.replace(/ /g,"_");
  //   }
  //   console.log(value)
  //   this.createCampaign(value)
  }

}
