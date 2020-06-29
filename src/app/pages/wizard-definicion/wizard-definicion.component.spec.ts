import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDefinicionComponent } from './wizard-definicion.component';

describe('WizardDefinicionComponent', () => {
  let component: WizardDefinicionComponent;
  let fixture: ComponentFixture<WizardDefinicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardDefinicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDefinicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
