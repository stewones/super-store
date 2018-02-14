import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {

  lista: any[] = [
    {
      nome: 'Fulano',
      idade: 16,
      descricao: "fulano eh um <strong>cara legal</strong>"
    },
    {
      nome: 'Beltrano',
      idade: 17
    },
    {
      nome: 'Ciclano',
      idade: 18
    },
    {
      nome: 'Deltrano',
      idade: 19
    },
    {
      nome: 'Eltrano',
      idade: 20
    }
  ]

  pessoa_selecionada: any = {};
  
  constructor() { }

  selecionaPessoa(pessoa: any) {
    this.pessoa_selecionada = pessoa;
  }

}
