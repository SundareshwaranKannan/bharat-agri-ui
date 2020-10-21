import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterUserComponent} from '../register-user/register-user.component';
import {RegisterUserModule} from '../register-user/register-user.module';


@NgModule({
  declarations: [UserComponent],
  exports: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterUserModule
  ]
})
export class UserModule { }
