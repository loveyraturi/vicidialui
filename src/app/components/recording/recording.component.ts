import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { GroupService } from 'app/services/group.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.css']
})
export class RecordingComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public campaing;
  loginInfo: Login = {
    user_name: null,
  }
  public users;
  public recordings;
  public selectedUser="";
  public selectedRecording="";
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder) {
    
  }
  ngOnInit() {
    this.campaing=localStorage.getItem("campaing")
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    console.log(this.username)
    this.fetchUser()
    // this.createForm();
    // this._snackBar.open("User Created","close",{
    //   duration: 3000
    // });
  }
  public userSelected(event) {
     console.log(event)
     this.fetchRecordingsByUsers(event);
  }
  public fetchUser() {
    this.userService.fetchUser().subscribe(
          data => {
            this.users = data
            
            console.log(this.users)
          })
  }
  public fetchRecordingsByUsers(userName) {
    this.groupService.fetchRecordingsByUsername(userName).subscribe(
          data => {
            this.recordings = data
    console.log(this.recordings)
          })
  }
  public downloadRecording() {
    if(this.selectedRecording!=""&&this.selectedUser!=""){
      console.log(this.selectedRecording,this.selectedUser)
      window.open("./assets/"+this.selectedRecording);
    }
  }

  // fetchGroups() {
  //   this.groupService.fetchGroups().subscribe(
  //     data => {
  //       this.groups = data

  //     })
  // }

  // private createForm(): void {
  //   this.registerform = this.formBuilder.group({
  //     name: new FormControl('', [Validators.required]),
  //     group: new FormControl('', Validators.required),
  //     username: new FormControl('', Validators.required),
  //     status: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required),
  //     confpass: new FormControl('', Validators.required),
  //     level: new FormControl('', Validators.required),
  //   });
  // }
  // submit({ value }: any): void {
  //   this.createUser(value);
    
  // }
}