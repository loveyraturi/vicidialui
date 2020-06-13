import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  fileToUpload: File = null;
  loginInfo: Login = {
    user_name: null,
  }
  public campaings;
  constructor(private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchCampaings()
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm();
    // this._snackBar.open("User Created","close",{
    //   duration: 3000
    // });
  }
  public createUser(value: any): void {
    console.log(value)
    
  }

  fetchCampaings() {
    this.campaingService.fetchActiveCampaing().subscribe(
      data => {
        this.campaings = data

      })
  }

  private createForm(): void {
    this.registerform = this.formBuilder.group({
      campaing: new FormControl('', [Validators.required]),
      duplicateCheck: new FormControl('', Validators.required),
      duplicateField: new FormControl('', Validators.required),
      duplicateAction: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required)
    });
  }
  submit({ value }: any): void {
    // value.uploadedFile=this.fileToUpload;
    
    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    formData.append('campaing',value.campaing);
    formData.append('duplicateAction',value.duplicateAction);
    formData.append('duplicateCheck',value.duplicateCheck);
    formData.append('duplicateField',value.duplicateField);
    console.log("############",formData)
    // this.createUser(value);
    
  }
  handleFileInput(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerform.get('file').setValue(file);
    }
    
}
}