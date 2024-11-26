import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userData: any = { email: '', password: '' }; // Initialize userData

  constructor(private user: UserService) {}

  login(userData: any): void {
    console.log('User login data:', userData); // Log for debugging
    this.user.changeData(userData); // Update user data in the service
  }
}
