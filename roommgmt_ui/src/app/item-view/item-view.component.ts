import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit{

  purchaseOrderList:any;

  ngOnInit() {
   this.getAllItemDetail()
    }
  constructor(
    private _service:ServiceService,
  ){}

  getAllItemDetail(){
   this._service.viewAllPurchasedetail().subscribe(
    (res)=>{
      this.purchaseOrderList=res;
      console.log(this.purchaseOrderList);
    },
    (error)=>{
      console.log(error)
    }
   )
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
