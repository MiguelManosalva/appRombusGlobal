import { ServiceModule } from './services/service.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WizardDefinicionComponent } from './pages/wizard-definicion/wizard-definicion.component';
import { WizardEspecialidadComponent } from './pages/wizard-especialidad/wizard-especialidad.component';
import { WizardDatosAdicionalesComponent } from './pages/wizard-datos-adicionales/wizard-datos-adicionales.component';
import { WizardTipoPresentacionComponent } from './pages/wizard-tipo-presentacion/wizard-tipo-presentacion.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { StepComponent } from './components/step/step.component';
import { CategoriaEspecialidadComponent } from './pages/wizard-especialidad/categoria-especialidad/categoria-especialidad.component';
import { HabilidadesComponent } from './pages/wizard-especialidad/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WizardDefinicionComponent,
    WizardEspecialidadComponent,
    WizardDatosAdicionalesComponent,
    WizardTipoPresentacionComponent,
    ResumenComponent,
    StepComponent,
    CategoriaEspecialidadComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
