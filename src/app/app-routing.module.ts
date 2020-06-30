import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardDefinicionComponent } from './pages/wizard-definicion/wizard-definicion.component';
import { WizardEspecialidadComponent } from './pages/wizard-especialidad/wizard-especialidad.component';
import { WizardDatosAdicionalesComponent } from './pages/wizard-datos-adicionales/wizard-datos-adicionales.component';
import { WizardTipoPresentacionComponent } from './pages/wizard-tipo-presentacion/wizard-tipo-presentacion.component';
import { ResumenComponent } from './pages/resumen/resumen.component';

const routes: Routes = [
  {
    path: 'definicion',
    component: WizardDefinicionComponent,
    data: { titulo: 'Definición' },
  },
  {
    path: 'especialidad',
    component: WizardEspecialidadComponent,
    data: { titulo: 'Especialidad' },
  },
  {
    path: 'datos-adicionales',
    component: WizardDatosAdicionalesComponent,
    data: { titulo: 'Datos adicionales' },
  },
  {
    path: 'tipo-presentacion',
    component: WizardTipoPresentacionComponent,
    data: { titulo: 'Tipo presentacion' },
  },
  {
    path: 'resumen',
    component: ResumenComponent,
    data: { titulo: 'Resumen' },
  },
  { path: '', redirectTo: '/definicion', pathMatch: 'full' },
  { path: '*', redirectTo: '/definicion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
