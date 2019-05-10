import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TerminalComponent} from './terminal-component/terminal.component';
import {UploaderModule} from './uploader/uploader.module';
import {NgxSpinnerModule} from 'ngx-spinner';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                TerminalComponent
            ],
            imports: [
            UploaderModule,
            NgxSpinnerModule
        ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));

});
