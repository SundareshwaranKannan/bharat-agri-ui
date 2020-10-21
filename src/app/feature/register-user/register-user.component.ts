import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserLogin} from '../../shared/model/user-login';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  @Output()
  closeRegister = new EventEmitter<boolean>();

  email = new FormControl('');
  password = new FormControl('');
  userName = new FormControl('');
  location = new FormControl('');
  mobileNumber = new FormControl();
  userRequest = {} as UserLogin;
  displayEmailError = false;

  constructor(
      private router: Router,
      private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  register() {
    const email: string = this.email.value;
    const pwd: string = this.password.value;
    if (email.length > 0 && pwd.length > 0) {
      this.userRequest.email = this.email.value;
      this.userRequest.password = this.password.value;
      this.userRequest.location = this.location.value;
      this.userRequest.mobile = this.mobileNumber.value;
      this.userRequest.name = this.userName.value;
      this.displayEmailError = (!email.includes('.com') && !email.includes('@'));
      if (!this.displayEmailError) {
        this.saveUserDetails();
      }
    } else {
      alert('Please enter your email and desired password');
    }
  }

  saveUserDetails() {
    const currentUser = this.userService.userDataBase.filter(
        user => user.email === this.userRequest.email
    );
    if (currentUser.length === 0) {
      this.userService.userDataBase.push(this.userRequest);
      this.closeRegister.emit(true);
      this.router.navigate(['/crop-details']);
    } else {
      alert('The given email id is already registered!');
    }
  }

}
