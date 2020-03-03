import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  userId: number = null;
  postId: number = null;


  onUserIdChange(userId): void {
    this.userId = userId
    console.log(userId);
  }
  onPostIdChange(postId): void {
    this.postId = postId
    console.log(postId);
  }
}
