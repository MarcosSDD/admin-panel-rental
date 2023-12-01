import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { RentsCompanyService } from 'src/app/services/rents-company.service';

@Component({
  selector: 'app-company-pie-chart',
  templateUrl: './company-pie-chart.component.html',
  styleUrls: ['./company-pie-chart.component.css']
})
export class CompanyPieChartComponent implements OnInit {
  
  result: any;
  
  constructor(private service: RentsCompanyService) { }
  
  ngOnInit(): void {
    this.getCompanys();
  }
  
  public chart: any;
  
  getCompanys(): void{
    this.service.getRentsbyCompany().subscribe({
      next: (res:any) => {
      this.result = res;
      const companyNames: string[] = this.result.map((company: any) => company.name_company);
      const quantityRents: string[] = this.result.map((company: any) => company.records_quantity);
      
      this.chart = new Chart("pieChart", {
        type: 'pie',
        data: {
          labels: companyNames,
          datasets: [{
            label: '',
            data: quantityRents,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
          }],
        },
      })
    },
    error: (error) => {
      console.error('Error al obtener el listado de empresas', error);
    }
  });
  } 
}