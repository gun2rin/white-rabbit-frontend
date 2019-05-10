import {Component, OnInit} from '@angular/core';
import {Colors} from '../colors';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  options: Colors;

  ngOnInit() {

    this.options = {foreground: '#5ae200', background: '#000000'};

  }

}
