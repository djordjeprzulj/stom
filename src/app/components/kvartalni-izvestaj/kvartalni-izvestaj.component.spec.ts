import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KvartalniIzvestajComponent } from './kvartalni-izvestaj.component';

describe('KvartalniIzvestajComponent', () => {
  let component: KvartalniIzvestajComponent;
  let fixture: ComponentFixture<KvartalniIzvestajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KvartalniIzvestajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KvartalniIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
