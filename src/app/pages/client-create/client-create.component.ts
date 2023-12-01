import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {

  clientForm: FormGroup

  title = "Crear Cliente"
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private clientService: ClientService,
              private aRouter: ActivatedRoute) {
    this.clientForm = this.fb.group({
      clientName: ['', Validators.required],
      clientRut: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editClient()
  }

  addClient() {

    const newClient: Client = {
      name: this.clientForm.get('clientName')?.value,
      rut:  this.clientForm.get('clientRut')?.value,
    }

    if(this.id !== null) {
      this.clientService.editClient(this.id, newClient).subscribe({
        next: (data: any)=>{
          this.toastr.success('El Cliente fue editado con exito!', 'Cliente actualizado');
          this.router.navigate(['/client-set']);
        },
        error: (error: any) => {
          console.log(error);
          this.clientForm.reset();
        }
      })
    }
    else{
      this.clientService.addClient(newClient).subscribe({
        next: (data: any)=>{
          this.toastr.success('La Cliente fue registrado con exito!', 'Cliente Registrado!');
          this.router.navigate(['/client-set']);
        },
        error: (error: any) => {
          console.log(error);
          this.clientForm.reset();
        }
      })
    }
    

  }

  editClient() {

    if(this.id !== null) {
      this.title = 'Editar Cliente';
      this.clientService.getClient(this.id).subscribe({
        next: (data: any ) => {
          this.clientForm.setValue({
            clientName: data.name,
            clientRut: data.rut
          })
        },
        error: (error: any)=>{
          console.log(error);
        }

    })
    }
  }

}
