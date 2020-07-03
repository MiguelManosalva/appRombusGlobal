import { StateStorage } from './../../services/state.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styles: [
  ]
})
export class StepComponent implements OnInit {

  @Input() public step: any;

  constructor(public _storage: StateStorage) {
  }

  ngOnInit(): void {
  }

}
