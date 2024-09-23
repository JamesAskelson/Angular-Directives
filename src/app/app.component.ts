import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives-Learning';
  isLoggedIn:boolean = true;
  userName: string = 'John Doe';
  userRole: string = '';
  loginCount: number = 0;
  friends: Array<string> = ['tim', 'jon', 'anthony', 'sandra', 'tyrone'];

  friendsObj: Array<{ id: number, name: string, email: string }> = [
    {id: 1, name: 'tim', email: 'tim@gmail.com'},
    {id: 2, name: 'jon', email: 'jon@gmail.com'},
    {id: 3, name: 'anthony', email: 'anthony@gmail.com'},
    {id: 4, name: 'sandra', email: 'sandra@gmail.com'},
  ]

  trackById(index:number, friend: any): number {
    return friend.id
  }

  makeAdmin(){
    this.userRole = 'Admin'
  }

  makeModerator(){
    this.userRole = 'Moderator'
  }

  makeGuest(){
    this.userRole = 'Guest'
  }

  logout(){
    this.userRole = ''
  }

  loginAttempt(){
    this.loginCount ++;
  }

  addNewUser(){
    let user = { id:5, name:'james', email: 'james@gmail.com'}
    this.friendsObj.push(user)
  }

  deleteFriend(id: number){
    this.friendsObj.splice(id, 1)
  }
}
