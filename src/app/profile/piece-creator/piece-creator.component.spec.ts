import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceCreatorComponent } from './piece-creator.component';

describe('PieceCreatorComponent', () => {
  let component: PieceCreatorComponent;
  let fixture: ComponentFixture<PieceCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
