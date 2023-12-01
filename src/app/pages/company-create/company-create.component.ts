import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent {
  companyForm: FormGroup

  title = "Crear Empresa"
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private companyService: CompanyService,
              private aRouter: ActivatedRoute) {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editCompany()
  }

  addCompany() {

    const newCompany: Company = {
      name: this.companyForm.get('companyName')?.value,
    }

    if(this.id !== null) {
      this.companyService.editCompany(this.id, newCompany).subscribe({
        next: (data: any)=>{
          this.toastr.success('La empresa fue editada con exito!', 'Empresa actualizada');
          this.router.navigate(['/company-set']);
        },
        error: (error: any) => {
          console.log(error);
          this.companyForm.reset();
        }
      })
    }
    else{
      this.companyService.addCompany(newCompany).subscribe({
        next: (data: any)=>{
          this.toastr.success('La empresa fue registrado con exito!', 'Empresa Registrado!');
          this.router.navigate(['/company-set']);
        },
        error: (error: any) => {
          console.log(error);
          this.companyForm.reset();
        }
      })
    }
    

  }

  editCompany() {

    if(this.id !== null) {
      this.title = 'Editar Empresa';
      this.companyService.getCompany(this.id).subscribe({
        next: (data: any ) => {
          console.log(data)
          this.companyForm.setValue({
            companyName: data.name,
          })
        },
        error: (error: any)=>{
          console.log(error);
        }

    })
    }
  }

}
