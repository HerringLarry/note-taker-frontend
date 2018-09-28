import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecePhotoUploaderComponent } from './piece-photo-uploader.component';

describe('PiecePhotoUploaderComponent', () => {
  let component: PiecePhotoUploaderComponent;
  let fixture: ComponentFixture<PiecePhotoUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecePhotoUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecePhotoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
