import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user.model';
import {environment} from '../environments/environment.prod';
import {Observable} from 'rxjs';
import {Post} from './models/post.model';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.api + 'users' );
  }

  getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(environment.api + 'posts?userId=' + userId );
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.api + 'comments?postId=' + postId );
  }

}
