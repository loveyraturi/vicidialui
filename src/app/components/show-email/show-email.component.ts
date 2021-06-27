import { Component, OnInit, Input } from '@angular/core';
import { Login } from 'app/models/login';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { CampaingService } from 'app/services/campaing.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit {
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
  loginInfo: Login = {
    user_name: null,
  }
  public leads;
  constructor(private formBuilder: FormBuilder, private campaingService: CampaingService, private groupService: GroupService, private router: Router) {
    this.showUploadedEmailFiles();

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
    if (this.level == 9) {
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
  showUploadedEmailFiles() {
    this.campaingService.showUploadedEmailFiles().subscribe(
      data => {
        this.leads = data

        console.log(this.leads, "###############$$$$$$")
        this.leads = this.leads.filter(item => {
        if(this.level<9){
          console.log(item.campaingName == this.campaing)
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
  modelClick(leadName) {
    this.selectedleadname = leadName
    console.log("model id is ", this.selectedleadname)
    // this.fetchLiveUserFromCampaing(id);
    //  this.usersbycampaing= this.userDetails[campaingName]
    //  console.log(this.usersbycampaing)
    //  this.usersbycampaingempty= this.usersbycampaing.length>0?true:false

    this.modelClass = "modalDisplay"

  }
  // onChange(event, id) {
  //   console.log("###############", event)
  //   if (event) {
  //     this.active = "Y"
  //   } else {
  //     this.active = "N"
  //   }
  //   console.log(id, this.active)
  //   this.campaingService.updateLeadStatus(id, this.active).subscribe(
  //     data => {
  //       this.fet()
  //     })

  // }
  showData(fileName){
   localStorage.setItem("emailFileName",fileName)
   this.router.navigateByUrl("showEmailData")
  }
  deleteCampaing(id) {
    this.campaingService.deleteCampaing(id).subscribe(
      data => {
        console.log(data)

      })
  }
  private createForm(): void {
    this.registerform = this.formBuilder.group({
      selectedleadname: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
  addNew() {
    this.router.navigateByUrl("/emailUpload")
  }
  submit({ value }: any): void {
    console.log(value, "RECHAIN#################");
  }

}
