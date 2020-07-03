import { ServiceModule } from './services/service.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';

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
import { FooterComponent } from './components/footer/footer.component';
import { ProfesionalComponent } from './pages/wizard-tipo-presentacion/profesional/profesional.component';
import { ProjectManagerComponent } from './pages/wizard-tipo-presentacion/project-manager/project-manager.component';
import { RombusCiudadComponent } from './pages/wizard-tipo-presentacion/rombus-ciudad/rombus-ciudad.component';
import { RombusCentralComponent } from './pages/wizard-tipo-presentacion/rombus-central/rombus-central.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { RangoPrecioComponent } from './components/rango-precio/rango-precio.component';

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
    HabilidadesComponent,
    FooterComponent,
    ProfesionalComponent,
    ProjectManagerComponent,
    RombusCiudadComponent,
    RombusCentralComponent,
    FormularioContactoComponent,
    RangoPrecioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
