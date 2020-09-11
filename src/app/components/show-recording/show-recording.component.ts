import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExportService } from 'app/services/export.service';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { CampaingService } from 'app/services/campaing.service';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-show-recording',
  templateUrl: './show-recording.component.html',
  styleUrls: ['./show-recording.component.css']
})
export class ShowRecordingComponent implements OnInit {

  title = 'angular-exportexcel-example';
  buttonDisabled = "disabled"
  customers: any = [];
  public username;
  public reportData;
  public campaings;
  public campaingList;
  public selectedCampaings = [];
  public users;
  public paginationLength;
  public responseLength;
  public campaing;
  public phoneNumber;
  public limit=100;
  public offset=0;
  public status=[];
  public audio = new Audio();
  public defaultPagination
  loginInfo: Login = {
    user_name: null,
  }
  public loading = false;
  dropdownList = [];
  dropdownUserList = []
  statusArray;
  selectedItems = [];
  selectedUserItems = [];
  selectedStatus=[];
  dropdownSettings = {};
  dropdownUserSettings = {};
  dropdownStatusSettings = {};
  public headers;
  public level;
  public group;
  public valuenull = "-"
  datefrom: Date = new Date();
  dateto: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy HH:mm:ss',
    defaultOpen: false,
    closeOnSelect: true
  }
  public datapresent
  constructor(private router: Router, private campaingService: CampaingService, private exportService: ExportService, private userService: UserService) {

    this.dropdownSettings = {
      singleSelection: false,
      text: "Campaing",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll: true,
      badgeShowLimit: 5,
      classes: ""
    };
    this.dropdownUserSettings = {
      singleSelection: false,
      text: "User",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 2,
      enableCheckAll: true,
      classes: ""
    };
    this.dropdownStatusSettings = {
      singleSelection: false,
      text: "Status",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      badgeShowLimit: 2,
      enableSearchFilter: true,
      enableCheckAll: true,
      classes: ""
    };
  }

  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.level = localStorage.getItem("level")
    this.group = localStorage.getItem("group")
    this.campaing=localStorage.getItem("campaing")
    this.loginInfo.user_name = this.username;
    this.datapresent = false;
    this.headers = [{ key: '#', value: '#' }, { key: 'lead_id', value: 'Lead Id' },
    { key: 'list_id', value: 'List Id' },
    { key: 'campaign_id', value: 'Campaign Id' },
    { key: 'call_date', value: 'Call Date' },
    { key: 'length_in_sec', value: 'Length' },
    { key: 'status', value: 'Status' },
    { key: 'phone_code', value: 'Phone Code' },
    { key: 'phone_number', value: 'Contact' },
    { key: 'user', value: 'User' },
    { key: 'comments', value: 'Comments' },
    { key: 'processed', value: 'Processed' },
    { key: 'term_reason', value: 'Term Reason' }]
    this.fetchCampaing();
    // this.fetchUsers();
    // this.fetchCountOfReport();
  }
  formatDate(date) {
    console.log(date)
    // if(typeof date.getMonth() !== 'function'){
     date=new Date(date)
    // }
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours % 24;
    hours = hours ? hours : 24; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':00';
    var month= (date.getMonth()+1).toString().length==1?"0"+(date.getMonth()+1).toString():date.getMonth()+1
    console.log(month,"############month")
    return (date.getFullYear()+"-"+month+ "-" + date.getDate() + " " + strTime);
  }

  fetchUsers() {
    this.userService.fetchUser().subscribe(
      data => {
        this.users = data
        var dropDownListLocal=[];
        data.forEach((item) => {

          var dropdownListLocal = {
            id: item.id,
            itemName: item.name
          }

          dropDownListLocal.push(dropdownListLocal)
        })
        this.dropdownUserList=dropDownListLocal

      })
  }
  onItemSelect(item: any) {
    console.log(item, "################Selected##################", this.users)
  }
  OnItemDeSelect(item: any) {
    console.log(item, "################DeSelected##################", this.users)
  }
  onSelectAll(items: any) {
    console.log(items, "################Selected1##################", this.users)
  }
  onDeSelectAll(items: any) {
    console.log(items, "################DeSelected1##################", this.users)
  }

  onUserItemSelect(item: any) {

  }
  OnUserItemDeSelect(item: any) {
  }
  onUserSelectAll(items: any) {

  }

  onUserDeSelectAll(items: any) {

  }

  populateUser() {
    this.dropdownUserList=[]
    this.statusArray=[]
    console.log(this.selectedItems, "######################");
    this.selectedItems.forEach((elements) => {
      this.userService.fetchUserByCampaing(elements.itemName).subscribe(
        data => {
          this.users = data
        data.forEach((item) => {

          var dropdownListLocal = {
            id: item.id,
            itemName: item.name
          }

          this.dropdownUserList.push(dropdownListLocal)
        })
          this.campaingService.fetchStatus(elements.itemName).subscribe(resp=>{
            this.status=this.status.concat(resp.statusFeedback.split(',')).map(Function.prototype.call, String.prototype.trim)
            this.status.push("OCCUPIED")
            this.statusArray=[]
            var statusObject={}
            this.status.forEach( itemm => {
              
              statusObject[itemm] = {
                id: itemm,
                itemName: itemm
              }
             
            });
            for(var key in statusObject) {
              this.statusArray.push(statusObject[key])
          }
          //  this.statusArray=statusObject;
            console.log("################$%^$%^$%^%$@#$@@",this.statusArray);
          })
        })
    })

  }
  fetchCampaing() {
    this.campaingService.fetchCampaing().subscribe(
      data => {
        console.log(data)
        this.campaingList = data.filter(item => {
          console.log(this.campaing)
          if (item.name == this.campaing) {
            return item
          }
        })
        this.campaingList.forEach((item) => {

          var dropdownListLocal = {
            id: item.id,
            itemName: item.name
          }

          this.dropdownList.push(dropdownListLocal)
        })
      })
  }
  fromDateSelect(event) {
    console.log(event)
  }
  toDateSelect(event) {
    console.log(event)
  }
  arrayOne(n: number): any[] {
    console.log("$$$$$$$$$$$$$$$$$arrayakenken############", Array(n))
    return Array(n);
  }
  removeColumn(columnName) {
    console.log(columnName)
    var objCol = this.reportData.map((item) => {

      delete item[columnName]
      return item
    })
    this.reportData = objCol
    console.log(this.reportData)
    this.headers = this.headers.filter((item) => {
      return item.key != columnName
    })
    console.log(this.headers)
  }

fetchNext(){
  this.offset=this.offset+this.limit+1
  this.fetchReportData() 
}
fetchPrevious(){
  if(this.offset>this.limit){
    this.offset=this.offset-this.limit-1
    this.fetchReportData() 
  }
}
  fetchReportData() {
    var campaingID = []
    this.selectedItems.forEach((items => {
      campaingID.push(items.itemName)
    }))
    var userId = []
    this.selectedUserItems.forEach((items => {
      userId.push(items.itemName)
    }))
    var statusList=this.selectedStatus.map(itemms=>{
      return itemms.itemName;
    })
    var requestData = {
      datefrom: this.formatDate(this.datefrom),
      dateto:  this.formatDate(this.dateto),
      campaingName: campaingID,
      userName: userId,
      limit: this.limit,
      offset: this.offset,
      phoneNumber: this.phoneNumber,
      status: statusList
    }
    this.loading = true
    this.userService.fetchcountrecordingreportdatabetween(requestData).subscribe(
      data => {

        this.buttonDisabled = ""
        console.log(this.buttonDisabled)
        console.log(data, "####################33#####@@@$$$$$")
        this.loading = false;
        // var userData=[]
        // for(var key in data) {
        //   // alert("Key: " + key + " value: " + data[key]);
        //   var datamap={}
        //   data[key].forEach(element => {
        //     console.log(key,element)
        //     for(var keyelement in element) {
        //     datamap[keyelement]=element[keyelement];
        //     }
        //   });
        //   datamap["user"]=key
        //   userData.push(datamap)
        // }
        // console.log(userData,"#################USERDATA###########");
        // this.defaultPagination = userData.length == 0 ? true : false
        this.reportData = data
      })
  }
  playPauseAudio(file, option) {
    console.log("assets/recording/mp3/" + file.split('.').slice(0, -1).join('.')+".mp3")
    if (option == true) {
      this.audio.src = "assets/recording/mp3/" + file.split('.').slice(0, -1).join('.')+".mp3";
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
    }

  }
  


  //DEFAULT STREAM #######################DEFAULT


  // fetchCountOfReport() {
  //   this.userService.fetchCountOfReport().subscribe(
  //     data => {
  //       var count = data[0].count
  //       this.paginationLength = Array(Math.ceil(count / 1000))
  //       this.datapresent = count == 0 ? false : true
  //       this.defaultPagination = count == 0 ? false : true
  //       // this.fetchReportDataStream(1000,1000)
  //     })
  // }
  // fetchReportDataStream(limit, offset) {
  //   var start = limit
  //   var end = offset
  //   console.log(start, end)
  //   this.userService.fetchReportData(start, end).subscribe(
  //     data => {
  //       console.log(data.length, "##################")
  //       this.reportData = data.map((item) => {
  //         if (item.lead_id == null) { item.lead_id = this.valuenull }
  //         if (item.list_id == null) { item.list_id = this.valuenull }
  //         if (item.campaign_id == null) { item.campaign_id = this.valuenull }
  //         if (item.call_date == null) { item.call_date = this.valuenull }
  //         if (item.length_in_sec == null) { item.length_in_sec = this.valuenull }
  //         if (item.status == null) { item.status = this.valuenull }
  //         if (item.phone_code == null) { item.phone_code = this.valuenull }
  //         if (item.phone_number == null) { item.phone_number = this.valuenull }
  //         if (item.user == null) { item.user = this.valuenull }
  //         if (item.comments == null) { item.comments = this.valuenull }
  //         if (item.processed == null) { item.processed = this.valuenull }
  //         if (item.term_reason == null) { item.term_reason = this.valuenull }
  //         return item
  //       })
  //     })


  // }
  export() {
    var campaingID = []
    this.selectedItems.forEach((items => {
      campaingID.push(items.itemName)
    }))
    var userId = []
    this.selectedUserItems.forEach((items => {
      userId.push(items.itemName)
    }))

    var requestData = {
      datefrom: this.formatDate(this.datefrom),
      dateto:  this.formatDate(this.dateto),
      campaingName: campaingID,
      userName: userId
    }
    this.userService.fetchAttendanceReportDataBetween(requestData).subscribe(
      data => {
        console.log("############", data)
        // FileSaver.saveAs(data, "/assets/Filename.xlsx");
        window.open("./assets/RecordingReport.xlsx");
      })
  }
  downloadRecording(filename){
    window.open("./assets/recording/mp3/"+filename.split('.').slice(0, -1).join('.')+".mp3");
  }

}
