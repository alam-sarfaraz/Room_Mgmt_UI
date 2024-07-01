import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpclient:HttpClient) { }

  // for user creation
  userRegistraintion(userRegistration:any){
      return this._httpclient.post('http://localhost:2023/user/create',userRegistration);
  }

  // for login
  userLogin(username:any,password:any){
    return this._httpclient.get(`http://localhost:2023/sigin/?username=${username}&password=${password}`);
  }

  //for All group Deatil
  groupDetail(){
    return this._httpclient.get('http://localhost:2023/groupDetail/findAll');
  }


  //for creating a new group
  createNewGroup(groupName:any){
    return this._httpclient.post('http://localhost:2023/groupDetail/create',groupName);
}

//for view all user detail
viewAllUserDetail(){
  return this._httpclient.get('http://localhost:2023/user/findAll');
}

//FOR VIEW ALL PURCHASE DETAIL LIST
viewAllPurchasedetail(){
  return this._httpclient.get('http://localhost:2023/purchaseItemDetail/findAll');
}

//for view notification Detail
viewNotificationDetails(){
  return this._httpclient.get('http://localhost:2023/notificationDetail/groupDataByPoIdentifier');
}

// for create new purchase detail
createNewpoDetail(AddItemList:any){
  return this._httpclient.post('http://localhost:2023/purchaseItemDetail/create',AddItemList);
}

// approved status by poid and username
approvedStatusByPoidAndUserName(username:string,poIdentifier:String,status:String){
  return this._httpclient.get(`http://localhost:2023/notificationDetail/updateNotificationDetailStatusByUsernameAndPoIdentifier?username=${username}&poIdentifier=${poIdentifier}&status=${status}`);
}

// for unique notifiction Identifier
getuniqueNotifictaionIdentifier(groupname:String){
  return this._httpclient.get(`http://localhost:2023/notificationDetail/findUniqueAllNoitifId?groupName=${groupname}`);
}

// for unique notifiction email id
getuniqueEmailId(groupname:String){
  return this._httpclient.get(`http://localhost:2023/notificationDetail/findUniqueAllEmailId?groupName=${groupname}`);
}

// for unique notifiction email id
getuniquePoId(groupname:String){
  return this._httpclient.get(`http://localhost:2023/notificationDetail/findUniqueAllPoId?groupName=${groupname}`);
}

// for unique notifiction email id
getuniqueUsername(groupname:String){
  return this._httpclient.get(`http://localhost:2023/notificationDetail/findUniqueAllusername?groupName=${groupname}`);
}

// for approved Status by notifictionid and email id
approvedStatusByNotifictionAndEmailId(email:String,niIdentifier:String,status:String){
  return this._httpclient.get(`http://localhost:2023/notificationDetail/updateNotificationDetailStatusByEmailAndNotificationIdentifier?email=${email}&niIdentifier=${niIdentifier}&status=${status}`);
}

// for All notification detail list
viewAllNotificationDetails(){
  return this._httpclient.get('http://localhost:2023/notificationDetail/findAll');
}

// for  viewAllPurchaseDetailbygroupname  list by groupname
viewAllPurchaseDetailbygroupname(groupName:String){
  return this._httpclient.get(`http://localhost:2023/purchaseItemDetail/findByGroupName?groupName=${groupName}`);
}

// for  viewAllPurchaseDetailbygroupname  list by groupname
viewAllPurchaseDetailbygroupname1(groupName:String){
  return this._httpclient.get(`http://localhost:2023/purchaseItemDetail/findByGroupName?groupName=${groupName}`);
}

// Add new item list
createNewItem(newItemList:any){
  return this._httpclient.post('http://localhost:2023/purchaseItemDetail/create',newItemList);
}

// findByUsernameFromUsernameList
findByUsernameFromUsernameList(groupname:String){
  return this._httpclient.get(`http://localhost:2023/userGroupMapping/findByUsernameByGroupName?groupName=${groupname}`)
}


}
