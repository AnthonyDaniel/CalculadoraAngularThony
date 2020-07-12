import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  resultado = "";
  vistaResultado = "";
  function = false;

  constructor() { }

  ngOnInit() {
  }

  limpiar() {
    this.resultado = "";
    this.vistaResultado = "";
  }

  division() {
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(this.vistaResultado.length-1) == "+" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "-" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "/" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "x"
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == ","){
        this.eliminar(); 
        this.vistaResultado=this.vistaResultado+"/";
      }else{
        if(this.vistaResultado.charAt(0) != ""){
          this.vistaResultado=this.vistaResultado+"/";
        }
      } 
    }
  }

  multiplicacion() {
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(this.vistaResultado.length-1) == "+" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "-" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "/" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "x"
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == ","){
        this.eliminar(); 
        this.vistaResultado=this.vistaResultado+"x";
      }else{
        if(this.vistaResultado.charAt(0) != ""){
          this.vistaResultado=this.vistaResultado+"x";
        }
      } 
    }
  }

  eliminar() {
    this.vistaResultado = this.vistaResultado.slice(0, -1);
    this.total();
  }

  resta() {
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(this.vistaResultado.length-1) == "+" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "-" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "/" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "x"
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == ","){
        this.eliminar(); 
        this.vistaResultado=this.vistaResultado+"-";
      }else{
        this.vistaResultado=this.vistaResultado+"-";
      } 
    }
  }

  suma() {
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(this.vistaResultado.length-1) == "+" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "-" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "/" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "x"
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == ","){
        this.eliminar(); 
        this.vistaResultado=this.vistaResultado+"+";
      }else{
        this.vistaResultado=this.vistaResultado+"+";
      } 
    }
  }

  total(touch=false) {
    let resultado = this.vistaResultado.replace(',', '.').replace('%','/100').replace('x','*')
    try {
      this.resultado = eval(resultado);
    }
    catch (e) {
      this.resultado = "ERROR";
    }

    if(touch){
      this.vistaResultado = this.resultado;
      this.resultado = "";
    }
  }

  coma(){
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(this.vistaResultado.length-1) == "+" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "-" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "/" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "x"
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == ","){
        this.eliminar(); 
        this.vistaResultado=this.vistaResultado+",";
      }else{
        if(this.vistaResultado.charAt(0) != ""){
          this.vistaResultado=this.vistaResultado+",";
        }
      } 
    }
  }

  porcentaje(){
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(0) != ""){
        this.vistaResultado=this.vistaResultado+"%";
      } 
    }
  }

  tocarNumero(numero) {
    if(this.vistaResultado.length < 11){
      this.vistaResultado=this.vistaResultado+numero;
      this.function = false;
      this.total();
    }
  }
  tocarNumeroCero(){
    if(this.vistaResultado.length < 11){
      if(this.vistaResultado.charAt(this.vistaResultado.length-1) == "+" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "-" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "/" 
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == "x"
      || this.vistaResultado.charAt(this.vistaResultado.length-1) == ","){
        //No haga nada
      }else{
        if(this.vistaResultado.charAt(0) != ""){
          this.vistaResultado=this.vistaResultado+"0";
          this.total();
        }
      } 
    }
  }
}