import { TestBed, inject } from '@angular/core/testing';
import { UploaderService } from './uploader.service';
import {} from 'jasmine';

describe('UploaderService', () => {

  beforeEach(() => {



    TestBed.configureTestingModule({
      providers: [UploaderService]
    });
  });

  it('should be created', inject([UploaderService], (service: UploaderService) => {
    expect(service).toBeTruthy();
  }));





});
