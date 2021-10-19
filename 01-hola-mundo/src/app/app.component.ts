import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nombre: string = 'Fernando';
  apellido: string = 'Mart';//+ VERSION.major;
}
