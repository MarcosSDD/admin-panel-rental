import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { CardComponent } from './card/card.component';
import { ClientBarChartComponent } from './charts/client-bar-chart/client-bar-chart.component';
import { CompanyPieChartComponent } from './charts/company-pie-chart/company-pie-chart.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { ButtonBoxComponent } from './pages/button-box/button-box.component';
import { CompanySetComponent } from './pages/company-set/company-set.component';
import { ClientSetComponent } from './pages/client-set/client-set.component';
import { CompanyCreateComponent } from './pages/company-create/company-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    ClientBarChartComponent,
    CompanyPieChartComponent,
    MiniCardComponent,
    ButtonBoxComponent,
    CompanySetComponent,
    ClientSetComponent,
    CompanyCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
