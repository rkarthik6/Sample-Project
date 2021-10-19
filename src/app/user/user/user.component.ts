import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  employees: any
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.employeeService.getInfo())
    this.getUsers()
  }

  getUsers() {
    this.employeeService.getUsers().subscribe((response) => {
      this.employees =  response
    })
  }

  goToUserDetails(id: number) {
    this.router.navigate(['/user/details', id]);
  }

}
