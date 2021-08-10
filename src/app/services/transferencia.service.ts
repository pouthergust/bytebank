import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    // const transferencia = {...$event, data: new Date()};
    // this.listaTransferencia.push(transferencia)
    return this.httpClient.post<Transferencia>(this.url, transferencia)
    // this.valor = $event.valor;
    // this.destino = $event.destino;
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date()
  }
}
