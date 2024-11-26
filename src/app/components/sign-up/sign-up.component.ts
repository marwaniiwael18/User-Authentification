import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../service/user.service';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-sign-up',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  userData: { email: string; password: string; phone: string; [key: string]: any } = { email: '', password: '', phone: '' };
  keyboard!: Keyboard; // Definite assignment assertion
  value: string = ''; // Initialize value

  constructor(private user: UserService) {}

  ngOnInit(): void {
    // Subscribe to the user data from the service
    this.user.currentUserData.subscribe(userData => {
      this.userData = userData || { email: '', password: '', phone: '' };
    });
  }

  signUp(data: { email: string; password: string; phone: string; [key: string]: any }): void {
    console.log('Sign Up Data:', data);
    this.user.changeData(data);
  }

  ngAfterViewInit(): void {
    // Initialize the virtual keyboard
    this.keyboard = new Keyboard({
      onChange: (input: string) => this.onChange(input),
      onKeyPress: (button: string) => this.onKeyPress(button),
      layoutName: 'default',
      layout: {
        default: [
          'q w e r t y u i o p',
          'a s d f g h j k l',
          '{shift} z x c v b n m {backspace}',
          '{numbers} {space} {ent}'
        ],
        shift: [
          'Q W E R T Y U I O P',
          'A S D F G H J K L',
          '{shift} Z X C V B N M {backspace}',
          '{numbers} {space} {ent}'
        ],
        numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}']
      },
      display: {
        '{numbers}': '123',
        '{ent}': 'return',
        '{shift}': '⇧',
        '{backspace}': '⌫',
        '{abc}': 'ABC'
      }
    });
  }

  onChange(input: string): void {
    this.value = input;
    console.log('Input changed:', input);
  }

  onKeyPress(button: string): void {
    console.log('Button pressed:', button);
    if (button === '{shift}') this.handleShift();
  }

  handleShift(): void {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';
    this.keyboard.setOptions({ layoutName: shiftToggle });
  }
}
