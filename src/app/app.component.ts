import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  // valor = 0.00;
  // destino = 0.00;

  constructor (private service: TransferenciaService) {

  }

/*   transferir($event: any) {
   this.service.adicionar($event);
  } */
}
