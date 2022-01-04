import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpartietwoComponent } from './accueilpartietwo.component';

describe('AccueilpartietwoComponent', () => {
  let component: AccueilpartietwoComponent;
  let fixture: ComponentFixture<AccueilpartietwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilpartietwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilpartietwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
