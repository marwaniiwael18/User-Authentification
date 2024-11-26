import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private userDataSource = new BehaviorSubject<{ email: string; password: string; phone: string }>({
    email: '',
    password: '',
    phone: ''
  });
  currentUserData = this.userDataSource.asObservable();

  constructor() {}

  changeData(newUserData: { email: string; password: string; phone: string }): void {
    this.userDataSource.next(newUserData); // Update BehaviorSubject value
  }
}
