import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploaderComponent} from './uploader.component';
import {ColorComponent} from '../color-component/color.component';
import {MessagesComponent} from '../messages-component/messages.component';
import {TransformedImageComponent} from '../transformed-image-component/transformed-image.component';
import {FileUploadModule} from 'ng2-file-upload';
import {ColorPickerModule} from 'ngx-color-picker';
import {NgxSpinnerService} from 'ngx-spinner';

describe('UploaderComponent', () => {
    let component: UploaderComponent;
    let fixture: ComponentFixture<UploaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UploaderComponent, ColorComponent, MessagesComponent, TransformedImageComponent],
            imports: [FileUploadModule, ColorPickerModule],
            providers: [NgxSpinnerService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UploaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', async(() => {
        const fixture = TestBed.createComponent(UploaderComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h5.uploader').textContent).toContain('Select picture to transform into Ascii Art');
    }));

});


