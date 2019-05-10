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

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UploaderModule} from './uploader/uploader.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {TerminalComponent} from './terminal-component/terminal.component';
import {AppRoutingModule} from './router/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
    declarations: [
        AppComponent,
        TerminalComponent

    ],
    imports: [
        BrowserModule,
        UploaderModule,
        NgxSpinnerModule,
        AppRoutingModule

    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
