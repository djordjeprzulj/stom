import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentEditComponent } from './pacijent-edit.component';

describe('PacijentEditComponent', () => {
  let component: PacijentEditComponent;
  let fixture: ComponentFixture<PacijentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacijentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacijentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
