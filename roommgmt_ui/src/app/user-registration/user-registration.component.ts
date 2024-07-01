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
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  userFormData: FormGroup;
  userRegistration: {};
  userName: String;
  emailId: String;
  confirmEmailId: String;
  firstName: String;
  middleName: String;
  lastName: String;
  password: String;
  confirmPassword: String;
  mobileNo: String;
  alternateMobileNo: String;
  gender: String;
  dob: String;
  role: String;
  groupMappings: any;
  selectedGroupList: any = [];

  constructor(
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder,
    private _service: ServiceService,
    private spinner: NgxSpinnerService
  ) {
    this.userFormData = _formBuilder.group({
      uname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      confirmEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      fname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
      ],
      mname: [
        '',
        Validators.compose([Validators.minLength(2), Validators.maxLength(50)]),
      ],
      lname: [
        '',
        Validators.compose([Validators.minLength(2), Validators.maxLength(50)]),
      ],
      pass: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ]),
      ],
      confirmPass: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ]),
      ],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      alternateMobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      genderdetail: ['', Validators.required],
      dob: ['', Validators.required],
      roleDetail: ['', Validators.required],
      groupDetail: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getGrpDetailList(event);
  }

  register(userFormData: any) {
    this.spinner.show();
    this.userRegistration = {
      userName: userFormData.controls.uname.value,
      emailId: userFormData.controls.email.value,
      confirmEmailId: userFormData.controls.confirmEmail.value,
      firstName: userFormData.controls.fname.value,
      middleName: userFormData.controls.mname.value,
      lastName: userFormData.controls.lname.value,
      password: userFormData.controls.pass.value,
      confirmPassword: userFormData.controls.confirmPass.value,
      mobileNo: userFormData.controls.mobile.value,
      alternateMobileNo: userFormData.controls.alternateMobile.value,
      gender: userFormData.controls.genderdetail.value,
      dob: userFormData.controls.dob.value,
      role: userFormData.controls.roleDetail.value,
      groupMappings: userFormData.controls.groupDetail.value.map(
        (groupName: string) => {
          return { groupName: groupName };
        }
      ),
    };

    console.log(this.userRegistration);
    this._service.userRegistraintion(this.userRegistration).subscribe(
      (data) => {
        swal.fire({
          title: 'Good job!',
          text: 'User created successfully.',
          icon: 'success',
        });
        userFormData.reset();
        this.spinner.hide();
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

  getGrpDetailList(event) {
    this._service.groupDetail().subscribe((data) => {
      this.selectedGroupList = data;
    });
  }
}
