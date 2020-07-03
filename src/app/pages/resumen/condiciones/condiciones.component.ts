import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.component.html'
})
export class CondicionesComponent implements OnInit {

  @Input() wizard4: any;

  constructor() { }

  ngOnInit(): void {
  }

}
