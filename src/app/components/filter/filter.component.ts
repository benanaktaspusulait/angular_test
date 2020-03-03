import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from '../../app.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() userId: EventEmitter<any> = new EventEmitter();

  users: User[] = [];
  constructor(
    private appService: AppService,
  ) {

    appService.getUsers().subscribe( (users) =>  {
      this.users = users;
    });
  }

  ngOnInit() {

  }

  onSelect(id) {
    this.userId.emit(id);
  }

}
