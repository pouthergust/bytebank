import { EventEmitter } from "@angular/core";
import { Component, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor = 0.00;
  destino = 0.00;

  transferir(){
    console.log('Solicitar transferencia')
    const valorEmitir = { valor: this.valor, destino: this.destino }
    this.aoTransferir.emit(valorEmitir)
  }
}