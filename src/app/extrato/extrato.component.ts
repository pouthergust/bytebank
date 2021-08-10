// import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  // Input - Recebendo Valores em do componente
  // @Input() transferencias: any[] = [];
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    // this.transferencias = this.service.transferencias;
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
