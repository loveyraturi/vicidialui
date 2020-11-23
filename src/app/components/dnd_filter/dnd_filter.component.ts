import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-dnd_filter',
  templateUrl: './dnd_filter.component.html',
  styleUrls: ['./dnd_filter.component.css']
})
export class DndFilterComponent implements OnInit {

  public registerform: any = FormGroup;
  public username;
  public fileName;
  public visibility=false;
  private users;
  public response;
  fileToUpload: File = null;
  loginInfo: Login = {
    user_name: null,
  }
  public campaings;
  constructor(private userService: UserService,private campaingService: CampaingService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm();

  }

  private createForm(): void {
    this.registerform = this.formBuilder.group({
      file: new FormControl(null, Validators.required)
    });
  }
  submit({ value }: any): void {
    this.visibility=true;
    console.log(value)
    const formData = new FormData();
    formData.append('file', this.registerform.get('file').value);
    this.campaingService.filterDnd(formData).subscribe(resp=>{
      console.log(resp,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      this.visibility=false;
      this.response=resp;
      window.open("./assets/"+resp.filenameDnd);
      window.open("./assets/"+resp.filenameNonDnd);
    })
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