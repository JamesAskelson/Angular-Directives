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

  addNewUser(){
    let user = { id:5, name:'james', email: 'james@gmail.com'}
    this.friendsObj.push(user)
  }

  deleteFriend(id: number){
    this.friendsObj.splice(id, 1)
  }
}
