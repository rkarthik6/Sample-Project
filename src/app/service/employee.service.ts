import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  messageInfo: string = ''
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }

  getUsersById(id: number) {
    return this.http.get("http://jsonplaceholder.typicode.com/users/" + id)
  }

  setInfo(message : string) : void {
    this.messageInfo = message  
  } 

  getInfo(){
    return this.messageInfo
  }
}
