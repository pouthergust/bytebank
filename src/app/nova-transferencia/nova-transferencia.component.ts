import { EventEmitter } from "@angular/core";
import { Component, Output } from "@angular/core";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  // Output - Exibindo dados do componente
  @Output() aoTransferir = new EventEmitter<any>();

  valor = 0.00;
  destino = 0.00;

  constructor(private service: TransferenciaService) {}

  transferir(){
    console.log('Solicitar transferencia')
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error));
  }

  limparCampos(){
    this.valor = 0.00;
    this.destino = 0.00;
  }
}
