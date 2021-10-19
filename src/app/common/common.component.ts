import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  title = 'project';
  isUnchanged = true
  showColour = true
  link = 'line-through'
  firstName: string = 'Karthik'
  secondName: string = 'test'
  showDiv: boolean = true
  age: number = 0
  pwd: any
  formData: any
  constructor() {}
  ngOnInit() {
    console.log(this.title)
  }
  clickEvent() {
    this.title = "New Project"
  }
  callValue(val: string) {
    console.log(val)
    this.secondName = val
  }

  onSubmit(formData: any) {
    console.log(formData)
    this.formData = formData
  }

}
