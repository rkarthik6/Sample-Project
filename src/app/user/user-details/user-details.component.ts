import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  name: string = ''
  selectedId: number = 0
  employeeDetails: any
  currentDate = new Date()
  amount = 125
  customPipe = 'custom pipe example'
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    //   console.log(this.name)
    // });
    this.route.paramMap.subscribe(params => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId)
        this.getUsersById(this.selectedId)
    })
  }

  getUsersById(selectedId: number) {
    this.employeeService.getUsersById(selectedId).subscribe((response) => {
      this.employeeDetails =  response
    })
  }
}

