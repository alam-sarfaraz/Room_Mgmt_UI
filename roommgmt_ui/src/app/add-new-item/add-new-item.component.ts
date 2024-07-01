import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import swal  from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css'],
})
export class AddNewItemComponent implements OnInit {
  selectedGroupList: any = [];
  usernameList: any = [];
  itemDetail: any = [];
  AddItemList: FormGroup;
  userName: String;
  modeOfPayment: String;
  paymentStatus: String;
  purchaseDate: String;
  formGroups: FormGroup[] = [];
  chng:String;

  ngOnInit(): void {
    this.getGrpDetailList(event);
    // this.viewAllUser(event);
    this.addGroup();

  }

  constructor(
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder,
    private _service: ServiceService,
    private spinner: NgxSpinnerService
  ) {
    this.AddItemList = _formBuilder.group({
      uname: ['', Validators.required],
      modeofpay: ['', Validators.compose([Validators.required])],
      payStatus: ['', Validators.compose([Validators.required])],
      pod: ['', Validators.compose([Validators.required])],
      groupName: ['', Validators.compose([Validators.required])],
    });
  }

  addGroup() {
    const group = this._formBuilder.group({
      itemName: [''],
      price: [''],
      quantity: [''],
      uprice: [''],
      uom: [''],
    });
    this.formGroups.push(group);
  }

  deleteGroup(index: number) {
    this.formGroups.splice(index, 1);
  }

  getGrpDetailList(event) {
    this._service.groupDetail().subscribe((data) => {
      this.selectedGroupList = data;
    });
  }

  // viewAllUser(event) {
  //   this._service.viewAllUserDetail().subscribe((data) => {
  //     this.usernameList = data;
  //   });
  // }


  addnewItem() {
    this.spinner.show();
    const formData = this.AddItemList.value;

    const newItem = {
      userName: formData.uname,
      modeOfPayment: formData.modeofpay,
      paymentStatus: formData.payStatus,
      groupName: formData.groupName,
      purchaseDate: formData.pod,
      itemDetail: this.formGroups.map((group) => {
        const itemDetailEntry: any = {};
        itemDetailEntry['itemName'] = group.controls['itemName'].value;
        itemDetailEntry['price'] = group.controls['price'].value;
        itemDetailEntry['quantity'] = group.controls['quantity'].value;
        itemDetailEntry['unitPrice'] = group.controls['uprice'].value;
        itemDetailEntry['unitOfMeasurement'] = group.controls['uom'].value;
        return itemDetailEntry;
      }),
    };
    console.log(newItem);
    this._service.createNewItem(newItem).subscribe(
      (res)=>{
        swal.fire({
          title: "Good job!",
          text: "Purchase Order created successfully.",
          icon: "success"
        });
        this.AddItemList.reset();
        this.deleteGroup(this.itemDetail.length)
        this.spinner.hide();
      },(error)=>{
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message
        });
        this.spinner.hide();
      }
    )

  }

  onChangeMethod(gname:any){
    console.log(gname)
    this.chng=gname;
  }

  viewUserNameList(event){
    console.log(this.chng)
     this._service.findByUsernameFromUsernameList(this.chng).subscribe(
      (data)=>{
        this.usernameList=data;
      },(error)=>{
        console.log(error)
      }
     )
  }


}
