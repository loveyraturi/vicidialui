import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
  selectedType(type) {
    console.log(type, "#############")
    if (type == "dropdown") {
      this.isdropdown=true
    }else{
      this.isdropdown=false
      this.content.push("<div class=\"form-group\"><label for=\"dropdowncontent\">DropDown Content</label> <div class=\"input-group\"> <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-book\"></i></div>        <input autofocus required type=\"text\" formControlName=\"dropdowncontent\" name=\"dropdowncontent\" id=\"dropdowncontent\"          class=\"form-control\" placeholder=\"Comma seperated Values\" tabindex=\"1\" [(ngModel)]=\"dropdowncontent\">      </div></div>")
    }
    console.log(this.content)
  }
  public createUser(value: any): void {
    this.campaingService.loadCsvLeadData(value).subscribe(resp => {
      console.log(resp, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      this.router.navigateByUrl('/showleads');
    })

  }

  fetchCampaings() {
    this.campaingService.fetchActiveCampaing().subscribe(
      data => {
        this.campaings = data

      })
  }
  more(){
    this.count=this.count+1
    this.fieldProps.push({name:"name"+this.count,isdropdown:false})
    console.log("more$###############MORE")
  }

  private createForm(): void {
    this.registerform = this.formBuilder.group({
      campaing: new FormControl('', [Validators.required]),
      dropdowncontent: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
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
    // this.createUser(formData);

  }
  handleFileInput(event) {
    console.log(event.target)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileName = file.name
      this.registerform.get('file').setValue(file);
    }

  }
}