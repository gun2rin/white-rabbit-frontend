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

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {Uploader} from '../uploader';
import {Colors} from '../colors';
import {environment} from '../../../environments/environment';
import {RecaptchaComponent} from 'ng-recaptcha';
import {FileUploader} from 'ng2-file-upload';
import {StateService} from '../services/state.service';


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})

export class UploaderComponent implements OnInit, OnDestroy {

  private disabled$: Observable<boolean>;

  private subscription: Subscription;
  private captchaSubscription: Subscription;
  private options: Colors;
  private reCaptcha: RecaptchaComponent;
  uploader: FileUploader;
  siteKey: string;
  filename$: Observable<string>;

  constructor(private uploaderService: Uploader<FileUploader>,
              private stateService: StateService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

    this.siteKey = environment.reCaptchaKey;
    this.disabled$ = this.stateService.disabled;
    this.filename$ = this.stateService.filename;
    this.uploader = this.uploaderService.getUploader;
    this.manageSpinner();

  }


  upload(options: Colors, reCaptcha: RecaptchaComponent) {
    this.options = options;
    this.reCaptcha = reCaptcha;
    reCaptcha.execute();
    this.captchaSubscription = reCaptcha.resolved.subscribe(
      response => this.manageUpload(response)
    );
  }

  manageUpload(response: string) {

    if (response) {
      this.uploaderService.beforeUpload(this.options, response);
      this.reCaptcha.reset();
    }

  }

  manageSpinner(): void {
    this.subscription = this.stateService.isUploading.subscribe(
      uploading => uploading ? this.spinner.show() : this.spinner.hide()
    );
  }


  ngOnDestroy(): void {

    this.subscription.unsubscribe();
    this.captchaSubscription.unsubscribe();
  }


}
