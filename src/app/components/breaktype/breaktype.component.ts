import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-breaktype',
  templateUrl: './breaktype.component.html',
  styleUrls: ['./breaktype.component.css']
})
export class BreakTypeComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public fileName;
  public isdropdown = false;
  public dropdowncontent;
  public content=[];
  public type=[];
  public fieldProps: any[] = [{
    field: '',
    label: ''
  }];
  public count=0;
  fileToUpload: File = null;
  loginInfo: Login = {
    user_name: null,
  }
  public campaings;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    // this.fetchBreakTypes()
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm();
    this.fetchCampaing();
    // this._snackBar.open("User Created","close",{
    //   duration: 3000
    // });
    
  }
  fetchCampaing(){
    this.campaingService.fetchCampaing().subscribe(
      data => {
        this.campaings=data
        this.campaings = this.campaings.map(item => {
          if (item.active == "Y") {
            item.enable = true
          } else {
            item.enable = false
          }
          return item
        })
        console.log("##################3",this.campaings)

      })
  }

  createBreakTypes(request) {
    this.campaingService.createBreakTypes(request).subscribe(
      data => {
        this.campaings = data
        this.router.navigateByUrl('showBreaktype');
      })
  }

  private createForm(): void {
    this.registerform = this.formBuilder.group({
      break_type: new FormControl('', [Validators.required]),
      campaing_name: new FormControl('', Validators.required)
    });
  }
  submit({ value }: any): void {
    // console.log(value)
    // value.uploadedFile=this.fileToUpload;
    // console.log(this.registerform.get('campaing').value)
    // const formData = new FormData();
    // formData.append('file', this.registerform.get('file').value);
    // formData.append('filename', this.fileName);
    // formData.append('campaing', this.registerform.get('campaing').value);
    // formData.append('duplicateAction', this.registerform.get('duplicateAction').value);
    // formData.append('duplicateCheck', this.registerform.get('duplicateCheck').value);
    // formData.append('duplicateField', this.registerform.get('duplicateField').value);
    console.log("############", value)
    this.createBreakTypes(value);

  }
}