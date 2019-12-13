import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clone-user',
  templateUrl: './clone-user.component.html',
  styleUrls: ['./clone-user.component.css']
})
export class CloneUserComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public name;
  public phonenumber;
  public status;
  public level;
  public groupId;
  loginInfo: Login = {
    user_name: null,
  }
  public groups;
  public groupName;
  public groupsById;
  constructor(private userService: UserService, private groupService: GroupService, private router: Router,private formBuilder: FormBuilder) {
    this.fetchGroups()
    this.fetchusersById(localStorage.getItem("update_id"));
  }
  ngOnInit() {

    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.cloneForm()
  }
  public createUser(value: any): void {
    this.userService.createUser(value).subscribe(
      data => {
        if (data.status) {
          this.router.navigateByUrl('/showUser');

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

  fetchusersById(id) {
    console.log("id#####",id)
    this.userService.fetchusersById(id).subscribe(
      data => {
        this.groupsById=data[0]
        console.log(this.groupsById,"####################33")
        this.name = this.groupsById.full_name
        this.phonenumber =this.groupsById.phone_login
        this.status =this.groupsById.active
        this.level =this.groupsById.user_level
        this.groupId=this.groupsById.user_group
        console.log(this.name,this.phonenumber,this.status,this.level,this.groupId)

      })
    
  }

  private cloneForm(): void {
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
