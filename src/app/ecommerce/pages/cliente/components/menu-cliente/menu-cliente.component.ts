import { Component, OnInit } from '@angular/core';
export interface Manu {
  nome: string;
  link: string;
  icone: Icone;
}

export interface Icone {
  nome: string;
  classes?: string;
  active?: string;
}

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss'],
})
export class MenuClienteComponent implements OnInit {
  constructor() {}

  menu: Manu[] = [
    {
      nome: 'Resumo da Conta',
      link: 'resumo',
      icone: {
        nome: 'icone-user-profile',
        classes: 'text-gray-400 group-hover:text-gray-500',
        active: '',
      },
    },
    {
      nome: 'Dados Básicos',
      link: 'dados-basicos',
      icone: {
        nome: 'icone-user-endereco',
        classes: 'text-gray-400 group-hover:text-gray-500',
        active: '',
      },
    },
  ];

  ngOnInit() {}
}
