import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component'
import { GroupDetailComponent } from './group-detail/group-detail.component'
import { ViewComponent } from './view/view.component'
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component'
import { ItemViewComponent } from './item-view/item-view.component'
import { NotificationviewComponent } from './notificationview/notificationview.component'
import { AddNewItemComponent } from './add-new-item/add-new-item.component'
import { PoDetailpageComponent } from './po-detailpage/po-detailpage.component'
import { ApprovalComponent } from './approval/approval.component'



const routes: Routes = [

  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'userregistrationpage',component:UserRegistrationComponent},
  {path:'loginpage',component:LoginComponent},
  {path:'contactpage',component:ContactComponent},
  {path:'aboutuspage',component:AboutusComponent},
  {path:'forgotpasswordpage',component:ForgotpasswordComponent},
  {path:'groupdetailPage',component:GroupDetailComponent},
  {path:'viewpage',component:ViewComponent},
  {path:'viewuserDetailpage',component:ViewUserDetailComponent},
  {path:'itemviewpage',component:ItemViewComponent},
  {path:'noiticationviewpage',component:NotificationviewComponent},
  {path:'addItempage',component:AddNewItemComponent},
  {path:'podetailPage',component:PoDetailpageComponent},
  {path:'approvalPage',component:ApprovalComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
