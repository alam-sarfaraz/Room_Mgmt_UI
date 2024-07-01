import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit{

  userDetailList:any;

  ngOnInit() {
   this.getAllUserDetail()
    }
  constructor(
    private _service:ServiceService,
  ){}

  getAllUserDetail(){
    this._service.viewAllUserDetail().subscribe(
      (res)=>{
        this.userDetailList=res;
        console.log(this.userDetailList)
      },
      (error)=>{

      }
    )
  }

}
