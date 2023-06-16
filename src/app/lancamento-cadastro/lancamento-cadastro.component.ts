import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {

  tipos = [
    {label:'Receita', value:'RECEITA'},
    {label:'Valor', value:'DESPESA'}
  ];

  pessoa = [
    {label: 'Marinelson', value: 1},
    {label: 'João Arnaldo', value: 2},
    {label: 'Sebastião Rodrigues', value: 3},
    {label: 'Belarmina Maria', value: 4},
    {label: 'Joana Cruz', value: 5}
  ];

  categoria = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2},
    {label: 'Segurança', value: 3},
    {label: 'Saúde', value: 4},
    {label: 'Educação', value: 5}
  ];

}
