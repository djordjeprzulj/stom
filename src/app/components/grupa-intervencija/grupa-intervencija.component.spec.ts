import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupaIntervencijaComponent } from './grupa-intervencija.component';

describe('GrupaIntervencijaComponent', () => {
  let component: GrupaIntervencijaComponent;
  let fixture: ComponentFixture<GrupaIntervencijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupaIntervencijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupaIntervencijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
