import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformedImageComponent } from './transformed-image.component';

describe('TransformedImageComponent', () => {
  let component: TransformedImageComponent;
  let fixture: ComponentFixture<TransformedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
