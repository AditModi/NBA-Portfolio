import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpParamsOptions } from "../HttpParamsOptions";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from './player';
import { SeasonAvg } from './season-average';

@Injectable( {
    providedIn: 'root'
})

export class NbaApiService {
    constructor(private http: HttpClient) {}

    API_KEY = '';

    private playersUrl: string = 'https://www.balldontlie.io/api/v1/players';
    private seasonAvgUrl: string = 'https://www.balldontlie.io/api/v1/season_averages';
    private nbaSenseBaseUrl: string = 'https://data.nba.net/json'

    public getAllPlayers(): Observable<Player[]>{ 
        return this.http.get<Player[]>(this.playersUrl)
            .pipe(map((res: any) => res.data),
                // catchError(error => { return throwError('Its a Trap!') })
            );
    };

    public searchPlayers(term: string): Observable<Player[]>{
        if (!term.trim()) {
            // if not search term, return empty Player array.
            return of([]);
        }
        term = term.trim();

        // Add safe, URL encoded search parameter if there is a search term
        const options = term ?
            { params: new HttpParams().set('search', term) } : {};

        return this.http.get<Player[]>(this.playersUrl, options)
            .pipe(map((res: any) => res.data));
    };

    
    public getSeasonAverage(player_id: number, season?: number): Observable<SeasonAvg[]>{
        const paramsObj = {
            'season': season || '',
            "player_ids\[\]": player_id || '',
        }
        const params = new HttpParams({ fromObject: paramsObj } as HttpParamsOptions);

        return this.http.get<SeasonAvg[]>(this.seasonAvgUrl, { params })
            .pipe(map((res: any) => res.data),
            );
    };

    public getTeamSchedule(team: string, year: number): Observable<any>{
        return this.http
            .get<any[]>(this.nbaSenseBaseUrl + '/cms/' + year + '/team/' + team + '/schedule.json')
            .pipe(map((res: any) => res['sports_content']['game']))
            .pipe(map((gameList: any) => gameList.reverse()))

    }
}

