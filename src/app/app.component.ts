import { Component } from '@angular/core';
import { StateStorage } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appRombusGlobal';

  constructor(public _storage: StateStorage){
    
  }

}
