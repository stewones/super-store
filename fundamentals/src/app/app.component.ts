import { Component } from '@angular/core';
import { PessoasService } from "app/pessoas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Semana do Angular 2017';

  
  constructor(public servicoPessoa: PessoasService) { }


}
