import { Component, OnChanges, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { NbaApiService } from "../../nba-api.service";
import { SeasonAvg } from '../../season-average';

@Component({
  selector: 'app-player-season-avg',
  templateUrl: './player-season-avg.component.html',
  styleUrls: ['./player-season-avg.component.scss']
})
export class PlayerSeasonAvgComponent implements OnChanges {
  public playerAvg: SeasonAvg[];
  public season: number = (new Date().getFullYear()) - 1;
  public currPlayer = this.data.CurrPlayer; 
  public headShot = this.data.headShot;

  constructor(
    private nbaapiservice: NbaApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  seasonFormControl = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.seasonFormControl.hasError('required')) {
      return 'Please enter a season between 1979-' + ((new Date().getFullYear()) - 1);
    }

    return this.seasonFormControl.hasError('season') ? 'Not a valid season' : '';
  }

  addSeason(newSeason: number) {
    if (newSeason) {
      this.postSeasonAvg(this.currPlayer.id, newSeason);
      newSeason = null;
    }
  }

  postSeasonAvg(player_id: number, season: number) {
    this.nbaapiservice.getSeasonAverage(player_id,season)
      .subscribe(
        (res) => {
        this.playerAvg = res
        // console.log(this.playerAvg)
        });
  }
  
  ngOnChanges(){
    
    this.postSeasonAvg(this.currPlayer.id, this.season);
    
  }
  
}