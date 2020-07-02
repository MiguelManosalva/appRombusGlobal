import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateStorage } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-wizard-datos-adicionales',
  templateUrl: './wizard-datos-adicionales.component.html'
})
export class WizardDatosAdicionalesComponent implements OnInit {

  public archivo: any;
  public comentario: string = '';
  public archivoValido: boolean = true;

  constructor(
    private _router: Router,
    private _storage: StateStorage
  ) {
    let step = { wizard: '3/4', titulo: 'Datos Adicionales' };
    this._storage.actualizarPasoActual(step);

  }

  ngOnInit(): void {}

  public guardarForm(): void {

    this.archivoValido = true;

    const wizard: any = {
      archivo: this.archivo,
      comentario: this.comentario,
    };

    if(!this.archivo){
     this.archivoValido = false;
     return
    }

    this._storage.state.wizard3 = wizard;
    this._router.navigate(['/tipo-presentacion']);
  }

  public subirArchivo(archivos: NgxFileDropEntry[]) {
    this.archivoValido = true;
    const archivo = archivos[0];
    // Valida archivo
    if (archivo.fileEntry.isFile) {
      const fileEntry = archivo.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        this.archivo = {
          info: file,
          nombre: file.name,
          base64: '',
        };
        console.log('arhicov: ', this.archivo);
      });
    }
  }
}
