import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives-Learning';
  isLoggedIn:boolean = true;
  userName: string = 'John Doe';
  isGuest: boolean = true;
  isAdmin: boolean = false;
  isModerator: boolean = false;
  loginCount: number = 0;

  makeAdmin(){
    this.isAdmin = true;
    this.isModerator = false;
    this.isGuest = false;
  }

  makeModerator(){
    this.isAdmin = false;
    this.isModerator = true;
    this.isGuest = false;
  }

  makeGuest(){
    this.isAdmin = false;
    this.isModerator = false;
    this.isGuest = true;
  }

  loginAttempt(){
    this.loginCount ++;
  }
}
