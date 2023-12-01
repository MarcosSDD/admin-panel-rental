import { Component, OnInit,  Input } from '@angular/core';
import { RentsService } from '../services/rents.service';
import { MINICARDDATA } from '../mini-card/mini-card-data';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string;
  @Input() color!: string;
  @Input() userName!: string;

  constructor( private service: RentsService ) { }
  
  miniCardData = MINICARDDATA

  formatCompact(value: number) {
    const result = new Intl.NumberFormat(
      'en-US',
      { 
        notation: "compact",
        style: 'currency',
        currency: 'USD'
      }
    ).format(value)
    return result;
  }

  mayorClient(data: any) {
    const maxClient = data.reduce((mayorClient: any, client: any) => {
      return client.total_cost > mayorClient.total_cost ? client : mayorClient;
    }, data[0]);
  
    return maxClient;
  }

  minorClient(data: any) {
    const minClient = data.reduce((minorClient: any, client: any) => {
      return client.total_cost < minorClient.total_cost ? client : minorClient;
    }, data[0]);
  
    return minClient;
  }


  ngOnInit(): void {
    this.getDataCards();
  }

  getDataCards(){
    this.service.getRents().subscribe({
      next: (data:any) => {
        let totalRents = Object.keys(data).length;
        let totalGain = data.reduce((total: any, item: any) => total + item.daily_cost, 0);
        let formatGain = this.formatCompact(totalGain)
        this.miniCardData[0].value = totalRents.toString()
        this.miniCardData[1].value = formatGain
      }

    })

    this.service.getCost().subscribe({
      next: (data:any) => {
        let maxClient = this.mayorClient(data)
        let minClient = this.minorClient(data)
        this.miniCardData[2].value = this.formatCompact(maxClient.total_cost)
        this.miniCardData[3].value = this.formatCompact(minClient.total_cost)
        this.miniCardData[2].userName = maxClient.name_client
        this.miniCardData[3].userName = minClient.name_client
      }
    })
  }

}