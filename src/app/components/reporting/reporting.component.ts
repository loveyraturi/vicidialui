import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExportService } from 'app/services/export.service';
import { Login } from 'app/models/login';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {


  title = 'angular-exportexcel-example';

  customers: any = [];
  public username;
  public reportData;
  loginInfo: Login = {
    user_name: null,
  }
  public headers;
  public valuenull = "-"
  datefrom: Date = new Date();
  dateto: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy HH:mm:ss',
      defaultOpen: false,
      closeOnSelect:true
  }
  public datapresent
  constructor(private exportService: ExportService, private userService: UserService) { }

  ngOnInit() {
    this.username = localStorage.getItem("user_name")
    this.loginInfo.user_name = this.username;
    // for (let i = 0; i <= 25; i++) {
    //   this.customers.push({firstName: `first${i}`, lastName: `last${i}`,
    //   email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
    // }
    // this.fetchReportData()
    this.datapresent=false;
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
    { key: 'user_group', value: 'User Group' },
    { key: 'term_reason', value: 'Term Reason' },
    { key: 'alt_dial', value: 'Alt Dial' },
    { key: 'called_count', value: 'Called Count' }]
  }
  fromDateSelect(event){
    console.log(event)
  }
  toDateSelect(event){
    console.log(event)
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
  fetchResult(){
    var datefrom=new Date(this.datefrom).getTime()/1000
    var dateto=new Date(this.dateto).getTime()/1000
    // console.log(datefrom.getTime()/1000)
    // console.log(dateto.getTime()/1000)

    this.userService.fetchReportDataBetween(datefrom,dateto).subscribe(
      data => {
       this.datapresent= data.length==0?false:true
        this.reportData =data.map((item) => {
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
          if (item.user_group == null) { item.user_group = this.valuenull }
          if (item.term_reason == null) { item.term_reason = this.valuenull }
          if (item.alt_dial == null) { item.alt_dial = this.valuenull }
          if (item.called_count == null) { item.called_count = this.valuenull }
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
  fetchReportData() {
    this.userService.fetchReportData().subscribe(
      data => {
       
        this.reportData =data.map((item) => {
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
          if (item.user_group == null) { item.user_group = this.valuenull }
          if (item.term_reason == null) { item.term_reason = this.valuenull }
          if (item.alt_dial == null) { item.alt_dial = this.valuenull }
          if (item.called_count == null) { item.called_count = this.valuenull }
          return item
        })
        console.log(this.reportData)
      })


  }
  export() {
    this.exportService.exportExcel(this.reportData, 'MIS_Report');
  }

}
