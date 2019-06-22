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

import {Injectable, OnDestroy} from '@angular/core';
import {FileItem, FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';
import {RabbitResponse} from '../rabbit.response';
import {map} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {Uploader} from '../uploader';
import {StateService} from './state.service';
import {Colors} from '../colors';


@Injectable({
  providedIn: 'root'
})

export class UploaderService implements Uploader<FileUploader>, OnDestroy {

  private uploader: FileUploader;
  private subscription: Subscription;
  private options = {
    url: environment.apiUrl,
    additionalParameter: {['background']: '', ['foreground']: '', ['captcha']: ''}
  };


  constructor(public state: StateService) {
    this.init();
    this.subscription = this.subscribeResponse();
  }


  private init(): void {

    this.uploader = new FileUploader(this.options);
  }


  private getResponse(): Observable<RabbitResponse> {
    return this.uploader.response.pipe(
      map(response => <RabbitResponse>JSON.parse(response)));
  }


  private subscribeResponse(): Subscription {

    return this.getResponse()
      .subscribe(
        (response) => this.handleResponse(response),
        () => this.handleError()
      );
  }


  public upload(): void {

    this.state.uploadState();
    const file: FileItem = this.uploader.queue[0];
    file.upload();

  }


  public beforeUpload(options: Colors, recaptchaResponse): void {

    this.checkQueue();
    this.state.filenameState(this.uploader.queue[0].file.name);

    this.options.additionalParameter['background'] = options.background;
    this.options.additionalParameter['foreground'] = options.foreground;
    this.options.additionalParameter['captcha'] = recaptchaResponse;
    this.upload();
  }


  /*
  * The method cleans queue due
  * to my own restriction of uploading multiple files.
  *
  */
  private checkQueue() {

    if (this.uploader.queue.length) {
      this.state.disabledState(false);
    }

    if (this.uploader.queue.length > 1) {
      this.uploader.removeFromQueue(this.uploader.queue[0]);
    }

  }


  private handleResponse(response: RabbitResponse): void {

    this.state.messagesState(response.msg);


    if (response.success === true) {

      const thumbnail = environment.downloadUrl + response.thumb;
      const fileSize = response.fileSize;
      const image = environment.downloadUrl + response.fullImage;

      this.state.successState(fileSize, thumbnail, image);
    } else {

      this.state.errorState();
    }

    this.state.uploadingState(false);

  }

  private handleError(): void {

    this.state.serverErrorState();
    this.subscribeResponse();
  }


  get getUploader(): FileUploader {
    return this.uploader;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
