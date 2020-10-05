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
  public fileName;
  public visibility=false;
  private users;
  fileToUpload: File = null;
  loginInfo: Login = {
    user_name: null,
  }
  public campaings;
  constructor(private userService: UserService,private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
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
   this.campaingService.loadCsvLeadData(value).subscribe(resp=>{
console.log(resp,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
this.visibility=false;
this.router.navigateByUrl('/showleads');
   })
    
  }
  campaingSelected(value){
      console.log(value)
      this.userService.fetchUserByCampaing(value).subscribe(
        data => {
          console.log(data)
          this.users = data
        })
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
      file: new FormControl(null, Validators.required),
      filename: new FormControl('', Validators.required)
    });
  }
  submit({ value }: any): void {
    this.visibility=true;
    // console.log(value)
    // value.uploadedFile=this.fileToUpload;
    console.log(this.registerform.get('campaing').value)
    const formData = new FormData();
    formData.append('file', this.registerform.get('file').value);
    formData.append('filename', this.fileName);
    formData.append('campaing',this.registerform.get('campaing').value);
    formData.append('duplicateAction',this.registerform.get('duplicateAction').value);
    formData.append('duplicateCheck',this.registerform.get('duplicateCheck').value);
    formData.append('duplicateField',this.registerform.get('duplicateField').value);
    console.log("############",formData)
    this.createUser(formData);
  }
  handleFileInput(event) {
    console.log(event.target)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileName=file.name
      this.registerform.get('file').setValue(file);
    }
    
}
}