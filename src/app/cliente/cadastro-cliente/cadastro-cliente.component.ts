import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: string ="Proprietário";
  contador : number = 0;
  imagem: string;
  constructor() { }

  ngOnInit() {
    let self = this;
    setTimeout(() =>{
      self.cliente = "Proprietário iniciando...";
      self.imagem = "assets/neymarempe.jpg";
    }, 1000);
    let interval = setInterval(() =>{
      self.cliente = "Proprietário " + self.contador++;
      if (self.contador ==5){
        clearInterval(interval);
        self.imagem = "assets/neymarcaido.jpg";
      }    
    }, 2000);
  }

  levantarNeymar() : void {
    this.imagem = "assets/neymarempe.jpg";
  }

}
