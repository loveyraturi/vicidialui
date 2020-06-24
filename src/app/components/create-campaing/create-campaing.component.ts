import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-create-campaing',
  templateUrl: './create-campaing.component.html',
  styleUrls: ['./create-campaing.component.css']
})
export class CreateCampaingComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public isChecked=false;
  public cname;
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    public selectedGroup=""
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder,
    private campaignService: CampaingService) {
    this.fetchGroups()
    this.fetchCampaing();
  }
  ngOnInit() {
this.selectedItems = [    ];
this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Campaing",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          enableCheckAll:true,
          classes:""
        };            
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm();
    // this._snackBar.open("User Created","close",{
    //   duration: 3000
    // });
  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}
  createCampaign(value: any) {
  }
  fetchCampaing() {
    this.campaignService.fetchCampaing().subscribe(
      data => {

        data.forEach((item)=>{
          var dropdownListLocal= {
            id: item.id,
            itemName:item.name
          }
          this.dropdownList.push(dropdownListLocal)
        });
      
        console.log( this.dropdownList,"#$@$#@$#")

      })
  }
  fetchGroups() {
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups = data
        console.log(data,"###")

      })
  }
  checkValue(value) {
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

  private createForm(): void {

    this.registerform = new FormGroup({
      campaign: new FormGroup({
        campaign_name: new FormControl('', [Validators.required]),
        campaign_status: new FormControl('', [Validators.required]),
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
        // allowed_campaigns: new FormControl('', Validators.required)

      })
    });
  }
  // private createForm(): void {

  //   this.registerform = this.formBuilder.group({
  //     user
  //     name: new FormControl('', [Validators.required]),
  //     group: new FormControl('', Validators.required),
  //     description: new FormControl('', Validators.required),
  //     webform: new FormControl('', Validators.required),
  //     adminusergroup: new FormControl('', Validators.required),
  //     hopperlevel: new FormControl('', Validators.required),
  //     closers: new FormControl('', Validators.required),
  //     autodiallevel: new FormControl('', Validators.required),
  //     localtimecall: new FormControl('', Validators.required),
  //     nextcall: new FormControl('', Validators.required),
  //     getcalllaunch: new FormControl('', Validators.required),
  //     script: new FormControl('', Validators.required),
  //     groupdiscription: new FormControl('', Validators.required),
  //     active: new FormControl('', Validators.required),
  //   });

  // }
  submit({ value }: any): void {
    console.log(value)

    var group
    var groupcampaingmapping
  var campaign={
    active: value.campaign.active,
    status: value.campaign.campaign_status,
	  name: value.campaign.campaign_name,
		dial_prefix: value.campaign.dial_prefix,
		local_call_time: value.campaign.local_call_time,
		dial_timeout: "5000",
		manual_dial_prefix: value.campaign.manual_dial_prefix
  }
  if(value.campaign.user_group!=""){
    groupcampaingmapping ={
      campaingname: campaign.name,
      groupname: value.campaign.user_group
    }
  }else{
    group ={
      name: value.group.user_group,
      active: "Y"
    }
    console.log("CREATING GROUP INFO",group)
    this.groupService.createGroup(group).subscribe(
      data => {
        console.log(data.id,"############1")
        groupcampaingmapping ={
          campaingname: campaign.name,
          groupname: value.group.user_group
        }
      })
  }
  
  console.log("CREATING CAMPAING INFO",campaign)
  this.campaignService.createCampaing(campaign).subscribe(
    data => {
      console.log(data,"############2")
      console.log("CREATING GROUP CAMPAING MAPPING INFO",groupcampaingmapping)
      this.campaignService.campaingGroupMapping(groupcampaingmapping).subscribe(
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
