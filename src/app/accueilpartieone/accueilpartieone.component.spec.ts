import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpartieoneComponent } from './accueilpartieone.component';

describe('AccueilpartieoneComponent', () => {
  let component: AccueilpartieoneComponent;
  let fixture: ComponentFixture<AccueilpartieoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilpartieoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilpartieoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
