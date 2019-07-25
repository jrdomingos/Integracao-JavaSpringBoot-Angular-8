import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { Cep } from '../services/cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  isLoading = false;

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  search(){
    this.isLoading = true;
    this.cepService.search(this.cep.cep)
        .then((cep:Cep) => {
          this.isLoading = false;
          this.cep = cep 
        })
        .catch(() =>{
          let cep = this.cep.cep;
          this.cep = new Cep();
          this.cep.cep = cep;
          alert('Could not make search or zip code non existent !' + 'Não foi possível fazer a busca ou CEP inexistente !')
        })
  }

}