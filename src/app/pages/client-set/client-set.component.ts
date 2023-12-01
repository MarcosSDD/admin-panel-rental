import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-set',
  templateUrl: './client-set.component.html',
  styleUrls: ['./client-set.component.css']
})
export class ClientSetComponent implements OnInit {

  listClients: Client[]=[] 
  constructor(private clientService: ClientService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getClients()
  }

  getClients(){
    this.clientService.getClients().subscribe({
      next: (data: any) =>{
        this.listClients = data;
      },
      error: (error: any) =>{
        console.error('Error al obtener el listado de clientes', error);
      }
    })

  }

  deleteClient(id: string){
    this.clientService.delClient(id).subscribe({
      next: (data: any) => {
      this.toastr.error('El cliente fue eliminado con exito' ,'Cliente Eliminado');
      this.getClients();
      }, 
      error: (error: any ) => {
        console.log(error);
      }
    })
  }

}
