/*
 *
 * This file is part of the White Rabbit application.
 * Thx to the https://github.com/thekiba methods from terminal.component
 *
 *
 * (c) Vladimir Ganturin <gun2rin@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
import {Component, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs/';
import {concatMap, delay, scan} from 'rxjs/operators';

@Component({
    selector: 'app-terminal',
    templateUrl: './terminal.component.html',
    styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  text$: Observable<string>;
  private terminalText = 'follow the white rabbit...';


    constructor() {
    }

    ngOnInit() {
        this.text$ = this.typewriterWrapper(this.terminalText);
    }


    private randomDelayWrapper(char): Observable<string> {
        const timeout: number = char === ' ' ? 135 : (Math.random() * 135);

        return of(char).pipe(delay(timeout));
    }

    protected typewriterWrapper(text: string): Observable<string> {
        return from(text.split(''))
            .pipe(
                delay(1000),
                concatMap(this.randomDelayWrapper),
                scan((acc, char) => acc + char, '')
            );
    }


}
