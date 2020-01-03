import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExportService } from 'app/services/export.service';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
import { CampaingService } from 'app/services/campaing.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {


  title = 'angular-exportexcel-example';
  buttonDisabled="disabled"
  customers: any = [];
  public username;
  public reportData;
  public campaings;
  public users;
  public paginationLength;
  public responseLength;
  public defaultPagination
  loginInfo: Login = {
    user_name: null,
  }
  dropdownList = [];
  dropdownUserList=[]
  selectedItems = [];
  selectedUserItems = [];
  dropdownSettings = {};
  dropdownUserSettings = {};
  public headers;
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
  constructor(private campaingService: CampaingService, private exportService: ExportService, private userService: UserService) {

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Campaing",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll: true,
      classes: ""
    };
    this.dropdownUserSettings = {
      singleSelection: false,
      text: "Select user",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll: true,
      classes: ""
    };
  }

  ngOnInit() {
    this.username = localStorage.getItem("user_name")
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
    this.fetchUsers();
    this.fetchCountOfReport();
  }
  
  fetchUsers() {
    this.userService.fetchUser().subscribe(
      data => {
        this.users = data
        data.forEach((item) => {

          var dropdownListLocal = {
            id: item.user_id,
            itemName: item.user
          }

          this.dropdownUserList.push(dropdownListLocal)
        })
        

      })
  }
  onItemSelect(item: any) {
  }
  OnItemDeSelect(item: any) {
  }
  onSelectAll(items: any) {
  }
  onDeSelectAll(items: any) {
  }

  



  onUserItemSelect(item: any) {
    
  }
  OnUserItemDeSelect(item: any) {
  }
  onUserSelectAll(items: any) {
  }
  onUserDeSelectAll(items: any) {
  }


  fetchCampaing() {
    this.campaingService.fetchCampaing().subscribe(
      data => {
        console.log(data)
        data.forEach((item) => {

          var dropdownListLocal = {
            id: item.campaign_id,
            itemName: item.campaign_name
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
    console.log("$$$$$$$$$$$$$$$$$arrayakenken############",Array(n))
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
  fetchResult() {
    var campaingID = []
    this.selectedItems.forEach((items => {
      campaingID.push(items.id)
    }))
    var userId = []
    this.selectedUserItems.forEach((items => {
      userId.push(items.itemName)
    }))
    var requestData = {
      datefrom: new Date(this.datefrom).getTime() / 1000,
      dateto: new Date(this.dateto).getTime() / 1000,
      campaingId: campaingID,
      userId:userId,
      limit:0,
      offset:0
    }

    this.userService.fetchReportDataBetween(requestData).subscribe(
      data => {
        this.responseLength=data.length
       this.paginationLength=Array(Math.ceil(this.responseLength/100))
       console.log(this.paginationLength,"#############$$$$$$$$$$$$$$$$$$$$$$$")
        this.datapresent = this.responseLength == 0 ? false : true
        this.reportData = data.map((item) => {
          if (item.lead_id == null) { item.lead_id = this.valuenull }
          if (item.list_id == null) { item.list_id = this.valuenull }
          if (item.campaign_id == null) { item.campaign_id = this.valuenull }
          if (item.call_date == null) { item.call_date = this.valuenull }
          if (item.length_in_sec == null) { item.length_in_sec = this.valuenull }
          if (item.status == null) { item.status = this.valuenull }
          if (item.phone_code == null) { item.phone_code = this.valuenull }
          if (item.phone_number == null) { item.phone_number = this.valuenull }
          if (item.user == null) { item.user = this.valuenull }
          if (item.comments == null) { item.comments = this.valuenull }
          if (item.processed == null) { item.processed = this.valuenull }
          if (item.term_reason == null) { item.term_reason = this.valuenull }
          return item
        })
        console.log(this.reportData)
      })
    // var parts = this.datefrom.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})/);
    // return Date.UTC(+parts[3], parts[2]-1, +parts[1], +parts[4], +parts[5])
    // console.log(this.datefrom.getDate())
    // console.log(this.datefrom.getMonth())
    // console.log(this.datefrom.getFullYear())
    // console.log(this.dateto.getDate()+"/"+this.dateto.getMonth()+"/"+this.dateto.getFullYear())
  }
  
  
  
  fetchReportData(start,end) {
    var campaingID = []
    this.selectedItems.forEach((items => {
      campaingID.push(items.id)
    }))
    var userId = []
    this.selectedUserItems.forEach((items => {
      userId.push(items.itemName)
    }))
    var requestData = {
      datefrom: new Date(this.datefrom).getTime() / 1000,
      dateto: new Date(this.dateto).getTime() / 1000,
      campaingId: campaingID,
      userId:userId,
      limit:start,
      offset:end
    }
    this.userService.createExcel(requestData).subscribe(
      data => {
        console.log("############",data)
       this.buttonDisabled=data.status?"":"disabled"
       console.log(this.buttonDisabled)
      })
    this.userService.fetchReportDataBetween(requestData).subscribe(
      data => {
        this.defaultPagination=data.length==0?true:false
        this.reportData = data.map((item) => {
          if (item.lead_id == null) { item.lead_id = this.valuenull }
          if (item.list_id == null) { item.list_id = this.valuenull }
          if (item.campaign_id == null) { item.campaign_id = this.valuenull }
          if (item.call_date == null) { item.call_date = this.valuenull }
          if (item.length_in_sec == null) { item.length_in_sec = this.valuenull }
          if (item.status == null) { item.status = this.valuenull }
          if (item.phone_code == null) { item.phone_code = this.valuenull }
          if (item.phone_number == null) { item.phone_number = this.valuenull }
          if (item.user == null) { item.user = this.valuenull }
          if (item.comments == null) { item.comments = this.valuenull }
          if (item.processed == null) { item.processed = this.valuenull }
          if (item.term_reason == null) { item.term_reason = this.valuenull }
          return item
        })
      })
  }


//DEFAULT STREAM #######################DEFAULT


  fetchCountOfReport(){
    this.userService.fetchCountOfReport().subscribe(
      data => {
        var count=data[0].count
        this.paginationLength=Array(Math.ceil(count/1000))
        this.datapresent = count == 0 ? false : true
        this.defaultPagination=count == 0 ? false : true
        this.fetchReportDataStream(1000,1000)
      })
  }
  fetchReportDataStream(limit,offset) {
    var start=limit
    var end=offset
    console.log(start,end)
    this.userService.fetchReportData(start,end).subscribe(
      data => {
        console.log(data.length,"##################")
        this.reportData = data.map((item) => {
          if (item.lead_id == null) { item.lead_id = this.valuenull }
          if (item.list_id == null) { item.list_id = this.valuenull }
          if (item.campaign_id == null) { item.campaign_id = this.valuenull }
          if (item.call_date == null) { item.call_date = this.valuenull }
          if (item.length_in_sec == null) { item.length_in_sec = this.valuenull }
          if (item.status == null) { item.status = this.valuenull }
          if (item.phone_code == null) { item.phone_code = this.valuenull }
          if (item.phone_number == null) { item.phone_number = this.valuenull }
          if (item.user == null) { item.user = this.valuenull }
          if (item.comments == null) { item.comments = this.valuenull }
          if (item.processed == null) { item.processed = this.valuenull }
          if (item.term_reason == null) { item.term_reason = this.valuenull }
          return item
        })
      })


  }
  export() {
    var campaingID = []
    this.selectedItems.forEach((items => {
      campaingID.push(items.id)
    }))
    var userId = []
    this.selectedUserItems.forEach((items => {
      userId.push(items.itemName)
    }))
    var requestData = {
      datefrom: new Date(this.datefrom).getTime() / 1000,
      dateto: new Date(this.dateto).getTime() / 1000,
      campaingId: campaingID,
      userId:userId
    }
    this.userService.createExcel(requestData).subscribe(
      data => {
       
      })
    // this.exportService.exportExcel(this.reportData, 'MIS_Report');
  }

}
