import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremenuComponent } from './premenu.component';

describe('PremenuComponent', () => {
  let component: PremenuComponent;
  let fixture: ComponentFixture<PremenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
