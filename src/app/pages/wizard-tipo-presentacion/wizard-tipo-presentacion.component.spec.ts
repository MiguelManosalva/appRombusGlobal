import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTipoPresentacionComponent } from './wizard-tipo-presentacion.component';

describe('WizardTipoPresentacionComponent', () => {
  let component: WizardTipoPresentacionComponent;
  let fixture: ComponentFixture<WizardTipoPresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardTipoPresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTipoPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
