import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AppService} from '../../app.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {
  @Input() userId: number;
  @Output() postId: EventEmitter<any> = new EventEmitter();
  posts: Post[] = [];
  constructor(
    private appService: AppService,
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.appService.getPosts(this.userId).subscribe( (posts) =>  {
      this.posts = posts;
    });
  }

  onClick( id ) {
    this.postId.emit(id);
  }


}
