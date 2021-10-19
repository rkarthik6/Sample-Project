import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter = 5
  employees: any
  queryParams: string = ''
  constructor(private readonly employeeService: EmployeeService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers()
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.queryParams = params.order
      }
    );
  }
  getUsers() {
    this.employeeService.setInfo('started')
    
    this.employeeService.getUsers().subscribe((response) => {
      this.employees =  response
    })
  }
  countChangedHandler(count: number) {
    this.counter = count;
    console.log(count);
  }

}
