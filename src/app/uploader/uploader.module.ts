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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploaderComponent} from './uploader-component/uploader.component';
import {FileUploader, FileUploadModule} from 'ng2-file-upload';
import {TransformedImageComponent} from './transformed-image-component/transformed-image.component';
import {MessagesComponent} from './messages-component/messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ColorComponent} from './color-component/color.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {UploaderService} from './services/uploader.service';
import {Uploader} from './uploader';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
    imports: [
        CommonModule,
        ColorPickerModule,
        BrowserAnimationsModule,
        FileUploadModule,
        RecaptchaModule
    ],

    exports: [UploaderComponent, TransformedImageComponent, MessagesComponent, ColorComponent],
    declarations: [UploaderComponent, TransformedImageComponent, MessagesComponent, ColorComponent],
    providers: [
        {provide: Uploader, useClass: UploaderService}
    ]

})
export class UploaderModule {
}
