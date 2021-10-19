import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { CapitalizePipe } from '../capitalize.pipe';



@NgModule({
  declarations: [UserDetailsComponent, UserComponent, CapitalizePipe],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
