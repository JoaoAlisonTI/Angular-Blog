import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover:string =""
  cardTitle:string ="Novo titulo"
  cardDescription:string =""
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
}
