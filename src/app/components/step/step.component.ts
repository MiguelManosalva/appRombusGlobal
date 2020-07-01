import { StateStorage } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: [
  ]
})
export class StepComponent implements OnInit {

  public step: any;

  constructor(public _storage: StateStorage) {
    this.step = this._storage.obtener().step;
   }

  ngOnInit(): void {
  }

}
