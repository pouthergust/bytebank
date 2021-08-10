import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];
  // valor = 0.00;
  // destino = 0.00;


  transferir($event: any) {
    console.log($event)
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia)
    // this.valor = $event.valor;
    // this.destino = $event.destino;
  }
}
