import { Component } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent {
  buttons: string[] = ['Lista de Clientes','Lista Clientes por Nombre','Listar Clientes Por Monto'];
  buttonActive: string = '';
  data: any[] = [];

  
  //constructor( private paisService: PaisService ) { }

  getClassCSS( button: string ): string {
    return (button === this.buttonActive) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  activeButton( button: string ) {

    if ( button === this.buttonActive ) { return; }

    this.buttonActive = button;
    this.data = [];

    // this.dataService.search( param )
    //   .subscribe( );
  }

}
