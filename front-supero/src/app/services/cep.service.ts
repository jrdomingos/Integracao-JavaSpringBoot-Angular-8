import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:Http) { }

  search(cep:string){
        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
              .toPromise()
              .then(response => this.convertCepResponse(response.json()));
   } 

   private convertCepResponse(cepResponse):Cep{
     let cep = new Cep();
     cep.cep = cepResponse.cep;
     cep.logradouro = cepResponse.logradouro;
     cep.numero = cepResponse.numero;
     cep.complemento = cepResponse.complemento;
     cep.bairro = cepResponse.bairro;
     cep.cidade = cepResponse.localidade;
     cep.estado = cepResponse.uf;
     return cep;
   }


}