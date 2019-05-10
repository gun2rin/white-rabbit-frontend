/*
 *
 * This file is part of the White Rabbit application.
 *
 * (c) Vladimir Ganturin <gun2rin@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-transformed-image',
  templateUrl: './transformed-image.component.html',
  styleUrls: ['./transformed-image.component.css'],
  animations: [
        trigger('showImage', [
            state('in', style({width: '300px', height: '300px'})),
            transition('void => in',  animate(500))

        ]),
        trigger('showElement', [
            state('fade-in', style({opacity: 1})),
            transition('void => fade-in',  animate('0.3s 500ms'))
        ])
    ]
})

export class TransformedImageComponent implements OnInit {
  src$: Observable<string>;
  private downloadLink$: Observable<string>;
  private fileSize$: Observable<string>;


  constructor(private stateService: StateService) { }

  ngOnInit() {
      this.src$ = this.stateService.convertedImage;
      this.downloadLink$ = this.stateService.downloadUrl;
      this.fileSize$ = this.stateService.fileSize;
  }

}
