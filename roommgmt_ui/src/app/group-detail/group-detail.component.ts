import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  EmailValidator,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css'],
})
export class GroupDetailComponent implements OnInit{
  groupdetail: FormGroup;
  groupName: string;
  groupjson: any;
  groupdetailList:any;


  ngOnInit(): void {
    this.findAllGroupdetailList();
  }

  constructor(
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder,
    private _service: ServiceService
  ) {
    this.groupdetail = _formBuilder.group({
      groupname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ]),
      ],
    });
  }

  createGroup(groupdetail) {
    this.groupName = groupdetail.controls.groupname.value;
    console.log(this.groupName);
    this.groupjson = {
      groupName: groupdetail.controls.groupname.value,
    };
    console.log(this.groupjson);
    if (this.groupName == '' || this.groupName == null) {
      this._toastr.error('Error', 'Group name is mandatory');
    } else {
      this._service.createNewGroup(this.groupjson).subscribe(
        (response) => {
          swal.fire({
            title: 'Good job!',
            text: 'Group created successfully.',
            icon: 'success',
          });
          groupdetail.reset();
          this.findAllGroupdetailList();
        },
        (error) => {
          console.log(error.error.message);
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.message,
          });
        }
      );
    }
  }

  findAllGroupdetailList(){
    this._service.groupDetail().subscribe(
      (data)=>{
        this.groupdetailList=data;
        console.log(data)
      },(error)=>{
        console.log(error);
      }
    )
  }


}
