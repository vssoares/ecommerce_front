import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { fadeInOutAnimation } from './shared/animations';

// material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarrinhoComponent } from './shared/components/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // material
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
