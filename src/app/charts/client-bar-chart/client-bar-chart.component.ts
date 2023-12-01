import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { error } from 'console';
import { RentsClientService } from 'src/app/services/rents-client.service';

@Component({
  selector: 'app-client-bar-chart',
  templateUrl: './client-bar-chart.component.html',
  styleUrls: ['./client-bar-chart.component.css']
})
export class ClientBarChartComponent implements OnInit {
  
  result: any;
  
  constructor(private service: RentsClientService ) { }

  ngOnInit(): void {
    this.getRentsByClients();
  }
  
  public chart: any;

  getRentsByClients(): void {
    this.service.getRentsbyClients().subscribe({
      next: (res:any) => {
        this.result = res;
        const clientNames: string[] = this.result.map((client: any) => client.name_client);
        const quantityRents: string[] = this.result.map((client: any) => client.records_quantity);
        this.chart = new Chart("barChart", {
          type: 'bar', //this denotes tha type of chart
    
          data: {// values on X-Axis
            labels: clientNames, 
             datasets: [
              {
                label: "Arriendos",
                data: quantityRents,
                backgroundColor: 'blue'
              } 
            ]
          },
          options: {
            aspectRatio: 2.0
          }
          
        });
      },
      error: (error:any)=>{
        console.error('Error al obtener el listado de empresas', error);
      }
    })
  }
}
