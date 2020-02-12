import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupaIntervencijaDialogComponent } from './grupa-intervencija-dialog.component';

describe('GrupaIntervencijaDialogComponent', () => {
  let component: GrupaIntervencijaDialogComponent;
  let fixture: ComponentFixture<GrupaIntervencijaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupaIntervencijaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupaIntervencijaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
