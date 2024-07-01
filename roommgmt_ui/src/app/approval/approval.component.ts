import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import swal  from 'sweetalert2'

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit{

  usernameList:any=[];
  selectedGroupList: any=[];
  poidList:any=[];
  nnotiIdList:any=[];
  emaidIdList:any=[];
  approvalGroup:FormGroup;
  approvedBynIdGroup:FormGroup;
  username:string;
  poIdentifier:String;
  status:String;
  email:String;
  niIdentifier:String;
  notifiStatus:String;
  groupname:String;
  dropDownValue:String;
  chng:String;

  ngOnInit(): void {
    // this.viewAllUser(event),
    // this.viewPoidLsit(event)
    // this.viewAllEmail(event)
    // this.viewAllNotification(event)
    this.getGrpDetailList(event)

  }

  constructor(private _toastr:ToastrService,private _formBuilder:FormBuilder,private _service:ServiceService){
  this.approvalGroup=_formBuilder.group({
  grpname:['',Validators.required],
  uname:['',Validators.required],
  poid:['',Validators.required],
  status:['',Validators.required],
})


this.approvedBynIdGroup=_formBuilder.group({
  grpname:['',Validators.required],
  emailId:['',Validators.required],
  nid:['',Validators.required],
  statusnId:['',Validators.required],
})
  }


  onChangeMethod(data:String){
    console.log("*********-",data);
     this.chng=data;
  }

  viewAllUser(event){
    this._service.getuniqueUsername(this.chng).subscribe(
      (data)=>{
       this.usernameList=data;
      }
    )
  }


  viewPoidLsit(event){
    this._service.getuniquePoId(this.chng).subscribe(
      (data)=>{
      this.poidList=data;
      },(error)=>{
   console.log(error);
      }
      )
  }


  getGrpDetailList(event){
    this._service.groupDetail().subscribe(
      (data)=>{
        this.selectedGroupList = data;
    });
  }

  approvedStatus(approvalGroup:any){

    this.username=approvalGroup.controls.uname.value;
    this.poIdentifier=approvalGroup.controls.poid.value
    this.status=approvalGroup.controls.status.value
    this._service.approvedStatusByPoidAndUserName(this.username, this.poIdentifier,this.status).subscribe(
      (data)=>{
        swal.fire({
          title: "Good job!",
          text: this.poIdentifier+" " + this.status + " successfully.",
          icon: "success"
        });
        approvalGroup.reset();
      },(error)=>{
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message
        });
      }
    )
  }

//-------------------------------------------------------- for second form


  onDropdownChange(value:String){
     console.log("------",value);
     this.dropDownValue=value;
   }

  viewAllEmail(event){
    console.log("------>",this.dropDownValue);
    this._service.getuniqueEmailId(this.dropDownValue).subscribe(
      (data)=>{
       this.emaidIdList=data
      },(error)=>{
        console.log(error);
      }
    )
  }

  viewAllNotification(event){

    console.log("------>",this.dropDownValue);
    this._service.getuniqueNotifictaionIdentifier(this.dropDownValue).subscribe(
      (data)=>{
        this.nnotiIdList=data;
      },(error)=>{
        console.log(error);
      }
    )
  }

  approvedStatusBynotification(approvedBynIdGroup:any){

    this.email=approvedBynIdGroup.controls.emailId.value;
    this.niIdentifier=approvedBynIdGroup.controls.nid.value
    this.notifiStatus=approvedBynIdGroup.controls.statusnId.value
    this._service.approvedStatusByNotifictionAndEmailId(this.email, this.niIdentifier,this.notifiStatus).subscribe(
      (res)=>{
        swal.fire({
          title: "Good job!",
          text: this.niIdentifier+" " + this.notifiStatus + " successfully.",
          icon: "success"
        });
        approvedBynIdGroup.reset();
      },(error)=>{
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message
        });
      }
    )
  }



}
