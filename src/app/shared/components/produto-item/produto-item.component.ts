import { Component, Input, OnInit } from '@angular/core';
import { fade, fadeInOutAnimation } from '../../animations';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss'],
  animations: [fadeInOutAnimation, fade]
})
export class ProdutoItemComponent implements OnInit {

  @Input('dados') produto: any 

  constructor(){
  }

  ngOnInit(): void {
  }

}
