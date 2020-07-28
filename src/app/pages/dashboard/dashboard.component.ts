import { Component, OnInit } from "@angular/core";

import { NbaApiService } from "../../nba-api.service";
import { Player } from '../../player';
import { Game } from '../../game';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public players: Player[];
  public Games: Game[];

  constructor(private nbaapiservice: NbaApiService) {}

  ngOnInit() {
    
    this.nbaapiservice.getAllPlayers() 
      .subscribe( 
        (res) => {this.players = res
        // console.log(res)
        // console.log(this.players.team)
        });
    
  }
}
