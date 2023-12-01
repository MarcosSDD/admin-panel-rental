import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ButtonBoxComponent } from './pages/button-box/button-box.component';
import { CompanySetComponent } from './pages/company-set/company-set.component';
import { ClientSetComponent } from './pages/client-set/client-set.component';
import { CompanyCreateComponent } from './pages/company-create/company-create.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    pathMatch: 'full'
  },
  {
  path: 'Dashboard',
  component: DashComponent,
  },
  {
    path: 'Empresas',
    component: CompanySetComponent,
  },
  {
    path: 'Clientes',
    component: ClientSetComponent,
  },
  {
    path: 'Botonera',
    component: ButtonBoxComponent,
  },
  { 
    path: 'company-create',
    component: CompanyCreateComponent,
  },
  { 
    path: 'company-set',
    component: CompanySetComponent,
  },
  { 
    path: 'company-edit/:id',
    component: CompanyCreateComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
