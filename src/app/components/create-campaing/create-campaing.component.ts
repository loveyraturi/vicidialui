import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-campaing',
  templateUrl: './create-campaing.component.html',
  styleUrls: ['./create-campaing.component.css']
})
export class CreateCampaingComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  constructor(private _snackBar: MatSnackBar,private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchGroups()
  }
  ngOnInit() {
    
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.createForm();
    this._snackBar.open("User Created","close",{
      duration: 3000
    });
  }
  create(value: any) {
    this.userService.createUser(value).subscribe(
      data => {
        localStorage.setItem("user_name", data.name);
        localStorage.setItem("phone_number", data.phoneNumber);
        if (data.status) {
          this.router.navigateByUrl('showUser');

        }

      })
  }

  fetchGroups(){
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups=data
        console.log(data)

      })
  }

  private createForm(): void {

    this.registerform = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      group: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      webform: new FormControl('', Validators.required),
      adminusergroup: new FormControl('', Validators.required),
      hopperlevel: new FormControl('', Validators.required),
      closers: new FormControl('', Validators.required),
      autodiallevel: new FormControl('', Validators.required),
      localtimecall: new FormControl('', Validators.required),
      nextcall: new FormControl('', Validators.required),
      getcalllaunch: new FormControl('', Validators.required),
      script: new FormControl('', Validators.required),
      groupdiscription: new FormControl('', Validators.required),
      active: new FormControl('', Validators.required),
    });

  }
  submit({data}){
console.log(data)
  }

}
