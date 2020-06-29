import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardEspecialidadComponent } from './wizard-especialidad.component';

describe('WizardEspecialidadComponent', () => {
  let component: WizardEspecialidadComponent;
  let fixture: ComponentFixture<WizardEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
