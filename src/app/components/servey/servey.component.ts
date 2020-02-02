import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { CampaingService } from 'app/services/campaing.service';
import { GroupService } from 'app/services/group.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'app/models/login';

@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.css']
})
export class ServeyComponent implements OnInit {
  public registerform: any = FormGroup;
  public username;
  public recordings = [];
  public selectedRecording;
  public audio = new Audio();
  public survey_first_audio_file
  public survey_dtmf_digits
  public survey_ni_digit
  public survey_wait_sec
  public survey_opt_in_audio_file
  public survey_ni_audio_file
  public survey_method
  public survey_no_response_action
  public survey_ni_status
  public survey_third_digit
  public survey_third_audio_file
  public survey_third_status
  public survey_third_exten
  public survey_fourth_digit
  public survey_fourth_audio_file
  public survey_fourth_status
  public survey_fourth_exten
  public survey_response_digit_map
  public survey_xfer_exten
  public survey_camp_record_dir
  public voicemail_ext
  public survey_menu_id
  public survey_recording
  public campaign_id
  public level;
  public group;


  loginInfo: Login = {
    user_name: null,
  }
  constructor(private userService: UserService, private groupService: GroupService, private router: Router, private formBuilder: FormBuilder,
    private campaignService: CampaingService) { }

  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.level = localStorage.getItem("level")
    this.group=localStorage.getItem("group")
    this.loginInfo.user_name = this.username;
    this.createForm()
    this.fetchRecordings()
    this.fetchCampaingById(localStorage.getItem("survey_campaing_id"));
  }
  fetchCampaingById(id) {
    this.campaignService.fetchCampaingsById(id).subscribe(
      dataresp => {
        var data = dataresp[0]
        console.log(data, "camoaingdi#####################")
        this.campaign_id= data.campaign_id
        this.survey_first_audio_file = data.survey_first_audio_file
        this.survey_dtmf_digits = data.survey_dtmf_digits
        this.survey_ni_digit = data.survey_ni_digit
        this.survey_wait_sec = data.survey_wait_sec
        this.survey_opt_in_audio_file = data.survey_opt_in_audio_file
        this.survey_ni_audio_file = data.survey_ni_audio_file
        this.survey_method = data.survey_method
        this.survey_no_response_action = data.survey_no_response_action
        this.survey_ni_status = data.survey_ni_status
        this.survey_third_digit = data.survey_third_digit
        this.survey_third_audio_file = data.survey_third_audio_file
        this.survey_third_status = data.survey_third_status
        this.survey_third_exten = data.survey_third_exten
        this.survey_fourth_digit = data.survey_fourth_digit
        this.survey_fourth_audio_file = data.survey_fourth_audio_file
        this.survey_fourth_status = data.survey_fourth_status
        this.survey_fourth_exten = data.survey_fourth_exten
        this.survey_response_digit_map = data.survey_response_digit_map
        this.survey_xfer_exten = data.survey_xfer_exten
        this.survey_camp_record_dir = data.survey_camp_record_dir
        this.voicemail_ext = data.voicemail_ext
        this.survey_menu_id = data.survey_menu_id
        this.survey_recording = data.survey_recording
      })


  }
  playPauseAudio(file, option) {
    console.log(option)
    if (option == true) {
      this.audio.src = "assets/recording/" + file;
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
    }

  }

  selectRecording(recording) {
    console.log(recording)
    console.log(this.recordings,"##################")
    var selected={}
    this.recordings.forEach(item => {
      if (item.value == recording) {
        selected=item;
      }
    })
    console.log(selected,"#@#@#@#@#@#@#@#@#@#@#@#@#@#@selected")
    this.selectedRecording = selected

  }
  fetchRecordings() {
    this.campaignService.fetchRecordings().subscribe(
      data => {
        console.log(data,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        data.forEach(element => {
          var extension = element.substr(element.lastIndexOf('.') + 1);
          var fileName=element.split('.').slice(0, -1).join('.')
          if (extension == "mp3" || extension == "wav" || extension == "gsm") {
            console.log(fileName,"###########$$$$$$$$$$$$$$$$############",element)
            this.recordings.push({ value: fileName, file: element })
          }
        });
        console.log(this.recordings,"@@@@@@@@@@@@@@@@@##################$$$$$$$$$$$@@@@@@@@@@@@")
      })
  }
  updateSurvey(data) {
    this.campaignService.updateSurvey(data).subscribe(
      data => {
        console.log(data)
        if(data.status==true){
          this.router.navigateByUrl("/showCampaing")
        }else{
          console.log(data,"error")
        }
      })
  }
  submit({ value }: any): void {
    console.log(value, "@@@@@@@@@@@@@@@@@@")
    // this.createUser(value);
    this.updateSurvey(value)

  }
  optionClick(event) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", event)
  }
  private createForm(): void {

    this.registerform = new FormGroup({
      campaign_id: new FormControl('', [Validators.required]),
      survey_first_audio_file: new FormControl('', [Validators.required]),
      survey_dtmf_digits: new FormControl('', [Validators.required]),
      survey_ni_digit: new FormControl('', [Validators.required]),
      survey_wait_sec: new FormControl('', [Validators.required]),
      survey_opt_in_audio_file: new FormControl('', [Validators.required]),
      survey_ni_audio_file: new FormControl('', [Validators.required]),
      survey_method: new FormControl('', [Validators.required]),
      survey_no_response_action: new FormControl('', [Validators.required]),
      survey_ni_status: new FormControl('', [Validators.required]),
      survey_third_digit: new FormControl('', [Validators.required]),
      survey_third_audio_file: new FormControl('', [Validators.required]),
      survey_third_status: new FormControl('', [Validators.required]),
      survey_third_exten: new FormControl('', [Validators.required]),
      survey_fourth_digit: new FormControl('', [Validators.required]),
      survey_fourth_audio_file: new FormControl('', [Validators.required]),
      survey_fourth_status: new FormControl('', [Validators.required]),
      survey_fourth_exten: new FormControl('', [Validators.required]),
      survey_response_digit_map: new FormControl('', [Validators.required]),
      survey_xfer_exten: new FormControl('', [Validators.required]),
      survey_camp_record_dir: new FormControl('', [Validators.required]),
      voicemail_ext: new FormControl('', [Validators.required]),
      survey_menu_id: new FormControl('', [Validators.required]),
      survey_recording: new FormControl('', [Validators.required]),

    });
  }

}
