import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {UserLogin} from '../../shared/model/user-login';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'sg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');
  modalRef: BsModalRef;
  userRequest = {} as UserLogin;

  constructor(
      private router: Router,
      private userService: UserService,
      private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userRequest.email = this.email.value;
    this.userRequest.password = this.password.value;
    if (this.userRequest.email.includes('@') && this.userRequest.email.includes('@')) {
      const currentUser = this.userService.userDataBase.filter(
          user => user.email === this.userRequest.email
      );
      if (currentUser.length > 0) {
        if (currentUser[0].password === this.userRequest.password) {
          this.router.navigate(['/crop-details']);
        } else {
          alert('Invalid password');
        }
      } else {
        alert('Invalid user or password. Try clicking on register button');
      }
    }
    else {
      alert('Enter valid email');
    }
  }

  openRegisterModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-md d-flex align-items-center h-75' })
    );
  }

}
