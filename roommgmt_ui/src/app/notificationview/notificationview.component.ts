import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
interface NotificationMap {
  [key: string]: {
    id: number;
    identifier: string;
    buyerUserName: string;
    buyerEmailId: string;
    notificationReceiverUsername: string;
    notificationReceiverEmailId: string;
    groupName: string;
    status: string;
    createdDate: string;
    createdTime: string;
    modifiedDate: string;
    modifiedTime: string;
    notificationItemDetail: any[]; // You might want to define a proper type for this array
  }[];
}

@Component({
  selector: 'app-notificationview',
  templateUrl: './notificationview.component.html',
  styleUrls: ['./notificationview.component.css']
})



export class NotificationviewComponent implements OnInit{

notification: any;
  notificationMap: NotificationMap;



  ngOnInit(){
    this.getNotificationDetail()
  }


  constructor(
    private _service:ServiceService
  ){  }


getNotificationDetail() {
  this._service.viewNotificationDetails().subscribe(
    (response) => {
      console.log(response);
      this.notificationMap = response as NotificationMap;
    },
    (error) => {
      console.log(error);
    }
  );
}

changeStatusColor(status:any):any{
  switch(status){
    case "Waiting for Approval":
    return "#1641EE";
    case 'Approved':
    return '#00cc00';
    case "Cancelled":
    return "#e01616";
    case "Pending":
    return "#eb34de";
  }
}



}

