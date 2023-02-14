import { Component } from '@angular/core';
import{UsersdataService}from './services/usersdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiapp';
  users:any;
  constructor(private userData:UsersdataService){
    userData.users().subscribe((data)=>{
      // this.users=data;
      //console.warn(data);
      const arr=Object.entries(data);
      console.log(arr[0][1]);
      //var arr1=data[users];
   this.users=arr[0][1];
      
      
    })
    
  }
}
