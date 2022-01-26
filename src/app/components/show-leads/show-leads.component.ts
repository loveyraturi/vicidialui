import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-show-leads',
  templateUrl: './show-leads.component.html',
  styleUrls: ['./show-leads.component.css']
})
export class ShowLeadsComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public currentElementIndex = 1;
  public active;
  public level;
  public group;
  public campaing;
  public hasAccess = false;
  public modelClass = "modal";
  public selectedleadname;
  public numberOfItemsRechained
  public processing=false
  public fileCounter;
  public status;
  loginInfo: Login = {
    user_name: null,
  }
  public leads;
  constructor(private formBuilder: FormBuilder, private campaingService: CampaingService, private groupService: GroupService, private router: Router) {
    this.fetchLeadVersions();
    // this.phonenumber=localStorage.getItem("phone_number")

  }
  // cloneCampaing(name){
  //   console.log("%$#@%$@#$",name)
  //   localStorage.setItem("clone_campaing_name",name);
  //   this.router.navigateByUrl("/cloneCampaing")
  // }
  ngOnInit() {
    this.level = localStorage.getItem("level")
    this.group = localStorage.getItem("group")
    this.campaing = localStorage.getItem("campaing")
    if (this.level == 9 || this.level == 8) {
      this.hasAccess = true;
    }
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm();
  }
  closeModal() {
    this.modelClass = "modal"
  }
  fetchLeadVersions() {
    
    this.campaingService.fetchLeadVersions().subscribe(
      data => {
        this.leads = data

        console.log(this.level, "###############$$$$$$")
        this.leads = this.leads.filter(item => {
          console.log(item.campaingName == this.campaing)
          if(this.level<9){
          if (item.campaingName == this.campaing) {
            return item
          }
        }else{
          return item
        }
        })
        if (this.level == 7) {
          //     this.leads = this.leads.filter(item => {
          //       console.log(item.user_group == this.group)
          //       if (item.user_group == this.group) {
          //         return item
          //       }
          //     })
          this.leads = this.leads.map(item => {
            if (item.status == "Y") {
              item.enable = true
            } else {
              item.enable = false
            }
            return item
          })
        } else {
          this.leads = this.leads.map(item => {
            if (item.status == "Y") {
              item.enable = true
            } else {
              item.enable = false
            }
            return item
          })
        }
        console.log(this.leads)

      })
  }
  showSurvey(name) {
    localStorage.setItem("survey_campaing_name", name);
    this.router.navigateByUrl("/surveyCampaing")
  }
  updateCampaing(name) {
    localStorage.setItem("update_campaing_name", name);
    this.router.navigateByUrl("/updateCampaing")
  }
  modelClick(leadName,campaingName) {
    this.status=[]
    console.log("#@@@@@",campaingName)
    this.campaingService.fetchStatus(campaingName).subscribe(resp=>{
      console.log(resp)
      console.log(resp.statusFeedback.split(','));
      this.status.push("OCCUPIED")
      this.status=this.status.concat(resp.statusFeedback.split(',')).map(Function.prototype.call, String.prototype.trim)
      console.log("#########this.status########",this.status)
    
    this.selectedleadname = leadName
    console.log(campaingName+"model id is ", this.selectedleadname)
    this.campaingService.fetchFileNameWithCount().subscribe(
      data => {
        console.log("#########@@@@@@@@@@@@@@@###########",leadName)
        console.log(data)
        this.fileCounter=data[leadName]
      })
    });
    // this.fetchLiveUserFromCampaing(id);
    //  this.usersbycampaing= this.userDetails[campaingName]
    //  console.log(this.usersbycampaing)
    //  this.usersbycampaingempty= this.usersbycampaing.length>0?true:false

    this.modelClass = "modalDisplay"

  }
  onChange(event, id) {
    console.log("###############", event)
    if (event) {
      this.active = "Y"
    } else {
      this.active = "N"
    }
    console.log(id, this.active)
    this.campaingService.updateLeadStatus(id, this.active).subscribe(
      data => {
        this.fetchLeadVersions()
      })

  }
  deleteLeads(id) {
    this.campaingService.deleteLeads(id).subscribe(
      data => {
        console.log(data)
        this.fetchLeadVersions()
      })
  }
  private createForm(): void {
    this.registerform = this.formBuilder.group({
      selectedleadname: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
  addNew() {
    this.router.navigateByUrl("/leads")
  }
  submit({ value }: any): void {
    console.log(value, "RECHAIN#################");
    this.processing=true
    this.campaingService.rechain(value.selectedleadname,value.status).subscribe(resp=>{
      console.log("resp############",resp)
      this.numberOfItemsRechained=resp.count
      this.processing=false
      this.fileCounter=0
    })
  }

}
