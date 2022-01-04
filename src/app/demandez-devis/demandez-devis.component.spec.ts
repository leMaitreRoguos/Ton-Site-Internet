import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandezDevisComponent } from './demandez-devis.component';

describe('DemandezDevisComponent', () => {
  let component: DemandezDevisComponent;
  let fixture: ComponentFixture<DemandezDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandezDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandezDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
