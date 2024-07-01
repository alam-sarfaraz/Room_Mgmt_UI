import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component'
import { ServiceService } from './service.service';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { ViewComponent } from './view/view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { NotificationviewComponent } from './notificationview/notificationview.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { PoDetailNavbarComponent } from './po-detail-navbar/po-detail-navbar.component';
import { PoDetailpageComponent } from './po-detailpage/po-detailpage.component';
import { ApprovalComponent } from './approval/approval.component'
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    ContactComponent,
    AboutusComponent,
    ForgotpasswordComponent,
    GroupDetailComponent,
    ViewComponent,
    SidebarComponent,
    ViewUserDetailComponent,
    ItemViewComponent,
    NotificationviewComponent,
    AddNewItemComponent,
    PoDetailNavbarComponent,
    PoDetailpageComponent,
    ApprovalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
