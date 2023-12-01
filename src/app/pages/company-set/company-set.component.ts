import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-set',
  templateUrl: './company-set.component.html',
  styleUrls: ['./company-set.component.css']
})
export class CompanySetComponent implements OnInit {

  listCompanys: Company[]=[] 
  constructor(private companyService: CompanyService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getCompanys()
  }

  getCompanys(){
    this.companyService.getCompanys().subscribe({
      next: (data: any) =>{
        this.listCompanys = data;
      },
      error: (error: any) =>{
        console.error('Error al obtener el listado de empresas', error);
      }
    })

  }

  deleteCompany(id: string){
    this.companyService.delCompany(id).subscribe({
      next: (data: any) => {
      this.toastr.error('El cliente fue eliminado con exito' ,'Cliente Eliminado');
      this.getCompanys();
      }, 
      error: (error: any ) => {
        console.log(error);
      }
    })
  }

}
