import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpartiethreeComponent } from './accueilpartiethree.component';

describe('AccueilpartiethreeComponent', () => {
  let component: AccueilpartiethreeComponent;
  let fixture: ComponentFixture<AccueilpartiethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilpartiethreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilpartiethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
