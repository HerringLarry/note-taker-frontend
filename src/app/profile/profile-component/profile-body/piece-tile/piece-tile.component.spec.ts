import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceTileComponent } from './piece-tile.component';

describe('PieceTileComponent', () => {
  let component: PieceTileComponent;
  let fixture: ComponentFixture<PieceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
