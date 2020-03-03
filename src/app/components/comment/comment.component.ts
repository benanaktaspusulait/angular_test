import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {WordCount} from '../../models/word-count.model';
// @ts-ignore
import {MatTableDataSource} from '@angular/material';

// @ts-ignore
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnChanges {
  @Input() postId: number;
  comments: any;
  words: WordCount[] = [];
  displayedColumns: string[] = ['word', 'per'];
  dataSource = null;

  constructor(
    private appService: AppService,
  ) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    const counts: Map<string, number> = new Map<string, number>();

    this.appService.getComments(this.postId).subscribe( (comments) =>  {
      this.words = [];
      this.comments = comments;
      this.comments.map(item => item.body)
        .reduce((top, str) => top + ' ' + str)
        .split(' ')
        .forEach(str => {
          counts[str] = counts[str] ? counts[str] + 1 : 1;
        });

      // @ts-ignore
      const total = Object.entries(counts).map(item => item[1]).reduce((sum, item) => sum + item);
      const top10 = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 9);
      // @ts-ignore
      console.log(total);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < top10.length; i++) {
        this.words.push({
          word: top10[i][0],
          per: Math.floor(top10[i][1] / total * 100).toFixed(1)
        });
      }
      this.dataSource  = new MatTableDataSource(this.words);
    });
  }
}
