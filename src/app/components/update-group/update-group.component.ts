import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'app/services/group.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {

  constructor(private campaingService: CampaingService, private router: Router, private groupService: GroupService, private formBuilder: FormBuilder) {
    this.fetchCampaing();

  }
  public registerform: any = FormGroup;
  loginInfo: Login = {
    user_name: null,
  }
  public id;
  public groupResult;
  public name;
  public groupName;
  public allowedCampaign;
  public group_name;
  public user_group;
  public dropdownlength;
  public username;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    this.updategroupForm();
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems.length, this.dropdownList.length);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems.length, this.dropdownList.length);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
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
        this.fetchGroupsByUser(localStorage.getItem("update_group_id"));
      })

  }
  fetchGroupsByUser(user_group) {
    this.groupService.fetchGroupsByUser(user_group).subscribe(
      data => {

        this.user_group = data[0].user_group
        console.log("groupdata#######", data[0].user_group, data[0].group_name)
        this.group_name = data[0].group_name
        console.log(data[0].allowed_campaigns)
        if (data[0].allowed_campaigns.includes("-ALL-CAMPAIGNS-")) {
          console.log(this.dropdownList, "###################")
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


  private updategroupForm(): void {
    this.registerform = this.formBuilder.group({

      name: new FormControl('', [Validators.required]),
      groupName: new FormControl('', Validators.required),
      allowed_campaigns: new FormControl('', Validators.required),

    });
  }

  submit({ value }: any): void {
    //     var campaing_name = value.campaign.campaign_name
    var localvar = ""
    console.log("this.dropdownList.length", this.dropdownlength)
    console.log("value.allowed_campaigns.length", value.allowed_campaigns.length)
    if (this.dropdownlength == value.allowed_campaigns.length) {
      value.allowed_campaigns = "-ALL-CAMPAIGNS-"
    } else {
      value.allowed_campaigns.forEach(element => {
        localvar = localvar + element.id + " "

      });
      value.allowed_campaigns = localvar;
    }
    this.update(value);

  }
  update(value: any) {

    console.log(value, "#$@$@#$#$")
    this.groupService.updateGroupByName(value).subscribe(
      data => {
        console.log(data)
        if(data.status){
        this.router.navigateByUrl("/showGroups")
        }


      })
  }
}
