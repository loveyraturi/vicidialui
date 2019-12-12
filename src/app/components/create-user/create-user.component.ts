import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    this.fetchGroups()
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
    this.userService.createUser(value).subscribe(
      data => {
        if (data.status) {
          this.router.navigateByUrl('/showUser');

        }

      })
  }

  fetchGroups() {
    this.groupService.fetchGroups().subscribe(
      data => {
        this.groups = data
        console.log(data)

      })
  }

  private createForm(): void {
    this.registerform = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      group: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confpass: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
  }
  submit({ value }: any): void {
    this.createUser(value);
    
  }
}