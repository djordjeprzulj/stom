import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditingIzvrsenihIntervencijaComponent } from './auditing-izvrsenih-intervencija.component';

describe('AuditingIzvrsenihIntervencijaComponent', () => {
  let component: AuditingIzvrsenihIntervencijaComponent;
  let fixture: ComponentFixture<AuditingIzvrsenihIntervencijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditingIzvrsenihIntervencijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditingIzvrsenihIntervencijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
