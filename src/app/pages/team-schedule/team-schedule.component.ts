import { Component, OnInit } from "@angular/core";

import { NbaApiService } from "../../nba-api.service";

import { Observable } from 'rxjs';


@Component({
    selector: "app-team-schedule",
    templateUrl: "team-schedule.component.html",
    styleUrls: ['team-schedule.component.scss']
})
export class TeamScheduleComponent implements OnInit {
    public schedule: Observable<any>;
    public NBATeams: string[] = ['hawks', 'celtics', 'nets', 'hornets', 'bulls', 'cavaliers', 'mavericks', 'nuggets', 'pistons', 'warriors',
        'rockets', 'pacers', 'clippers', 'lakers', 'grizzlies', 'heat', 'bucks', 'timberwolves', 'pelicans', 'knicks', 'thunder', 'magic', 'sixers',
        'suns', 'blazers', 'kings', 'spurs', 'raptors', 'jazz', 'wizards'];

    constructor(private nbaapiservice: NbaApiService) { }

    getGameDate(d : string, time: string){
        let game_date = d.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
        
        var full_date = new Date(game_date).toUTCString();
        full_date = full_date.substring(0, full_date.indexOf(' 00'))

        if (time != "") {
            let game_time = time.replace(/(\d{2})(\d{2})/g, '$1:$2');
            full_date = full_date + " at " + game_time;
        }
        return full_date
    }
    
    postTeamSchedule(team: string, year: number) {
        this.nbaapiservice.getTeamSchedule(team, year).subscribe(
            (res) => {
                this.schedule = res
                // console.log(res)
            });
    }

    ngOnInit() {
        this.postTeamSchedule('clippers', 2019);
    }
}

