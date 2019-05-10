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

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/';


@Injectable({
  providedIn: 'root'
})

export class StateService {

   private _uploading: BehaviorSubject<boolean>;
   private _messages: BehaviorSubject<string[]>;
   private _disabled: BehaviorSubject<boolean>;
   private _error: BehaviorSubject<boolean>;
   private _convertedImage:  BehaviorSubject<string>;
   private _downloadUrl: BehaviorSubject<string>;
   private _fileName: BehaviorSubject<string>;
   private _fileSize: BehaviorSubject<string>;

  constructor() {

      this._messages = new BehaviorSubject([]);
      this._disabled = new BehaviorSubject(true);
      this._error = new BehaviorSubject(false);
      this._uploading = new BehaviorSubject(false);
      this._convertedImage = new BehaviorSubject('');
      this._fileName = new BehaviorSubject('');
      this._downloadUrl = new BehaviorSubject('');
      this._fileSize = new BehaviorSubject('');
  }

  uploadState(): void {
      this.uploadingState(true);
      this.messagesState([]);
      this._disabled.next(true);
      this._convertedImage.next('');
  }

  uploadingState(state: boolean) {

      this._uploading.next(state);
  }

  filenameState(filename: string) {
     this._fileName.next(filename);
  }

  disabledState(state: boolean) {
      this._disabled.next(state);
  }

  messagesState(message: string[]) {
      this._messages.next(message);
  }

  successState( size, thumb, image): void {

      this._error.next(false);
      this._convertedImage.next(thumb);
      this._downloadUrl.next(image);
      this._fileSize.next(size);
  }

  errorState(): void {

      this._error.next(true);
      this._convertedImage.next('');
      this._downloadUrl.next('');
      this._fileSize.next('');

  }

  serverErrorState(): void {

      this._messages.next(['Something went wrong...']);
      this._convertedImage.next('');
      this._downloadUrl.next('');
      this._error.next(true);
      this._uploading.next(false);
      this._disabled.next(false);
      this._fileName.next('');

  }

    get messages(): Observable<string[]> {
        return this._messages.asObservable();
    }


    get disabled(): Observable<boolean> {
        return this._disabled.asObservable();
    }


    get error(): Observable<boolean> {
        return this._error.asObservable();
    }

    get convertedImage(): Observable<string> {
        return this._convertedImage.asObservable();
    }

    get isUploading(): Observable<boolean> {

        return this._uploading.asObservable();
    }

    get fileSize(): Observable<string> {

        return this._fileSize.asObservable();
    }

    get filename(): Observable<string> {

        return this._fileName.asObservable();
    }

    get downloadUrl(): Observable<string> {

        return this._downloadUrl.asObservable();
    }

}
