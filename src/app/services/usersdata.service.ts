import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url = "https://dummyjson.com/users";
  constructor(private http:HttpClient) { }
  users(){
    // console.log(this.url)
    return this.http.get(this.url)
    
  }
}
