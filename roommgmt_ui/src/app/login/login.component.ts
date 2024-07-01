import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,EmailValidator} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service'
import { Router } from '@angular/router';
import swal  from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData:FormGroup;
  username:String;
  password:String;

   constructor(
    private _toastr:ToastrService,
    private _formBuilder:FormBuilder,
    private _service:ServiceService,
    private _router:Router,
    private spinner: NgxSpinnerService

    ){
     this.loginData=_formBuilder.group({
      uname:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50)])],
      pass:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(50)])],
     })
   }

  signin(loginData:any){
    this.spinner.show();
     this.username=loginData.controls.uname.value;
     this.password=loginData.controls.pass.value;
     if (this.username =='' || this.username == null) {
       this._toastr.error("Error","username is mandatory")
     }else if(this.password == '' || this.password == null){
      this._toastr.error("Error","Password is mandatory")
     }
     else {
     this._service.userLogin(this.username,this.password).subscribe(
      (response)=>{
        this._router.navigateByUrl('/viewpage');
        this.spinner.hide();
      },
      (error)=>{
        console.log(error.error.message);
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message
        });
      }
     )
  }
}
}
