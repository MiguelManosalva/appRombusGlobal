import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDatosAdicionalesComponent } from './wizard-datos-adicionales.component';

describe('WizardDatosAdicionalesComponent', () => {
  let component: WizardDatosAdicionalesComponent;
  let fixture: ComponentFixture<WizardDatosAdicionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardDatosAdicionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDatosAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
