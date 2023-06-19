import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {

  lancamento = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', vencimento: '30/06/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria Brasil'},
    {tipo: 'RECEITA', descricao: 'Venda de software', vencimento: '10/06/2017', dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Maracujá Eletrônica'},
    {tipo: 'DESPESA', descricao: 'Impostos', vencimento: '20/07/2017', dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'},
    {tipo: 'DESPESA', descricao: 'Mensalidade da escola', vencimento: '05/06/2017', dataPagamento: '30/05/2017', valor: 800, pessoa: 'Escolinha Sol Nascente'},
    {tipo: 'RECEITA', descricao: 'Venda de carro', vencimento: '18/08/2017', dataPagamento: null, valor: 55000, pessoa: 'Marinelson'},
    {tipo: 'DESPESA', descricao: 'Aluguel', vencimento: '10/07/2017', dataPagamento: '09/07/2017', valor: 1750, pessoa: 'Imóveis Sebastian'},
    {tipo: 'DESPESA', descricao: 'Mensalidade da academia', vencimento: '13/07/2017', dataPagamento: null, valor: 180, pessoa: 'Leônidas GYM'},
  ];

}
