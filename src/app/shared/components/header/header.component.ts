import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario: any;
  
  constructor(
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) {

    this.authService.currentUsuario.subscribe(usuario => {
      this.usuario = usuario
    })

    if (!this.usuario) {
      let user = this.authService.decodePayloadJWT()
      this.authService.changeUsuario(user?.user)
    }

  }

  ngOnInit() {}

  openCarrinho() {  
    this.carrinhoService.show()
  }

}
