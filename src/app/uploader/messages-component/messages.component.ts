import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],

})
export class MessagesComponent implements OnInit {
  messages$: Observable<string[]>;
  private error$: Observable<boolean>;

  constructor(private stateService: StateService) { }

  ngOnInit() {
      this.messages$ = this.stateService.messages;
      this.error$ = this.stateService.error;
  }

}
