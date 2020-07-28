export interface Game {
    "id": number,
    "date": string,
    "home_team_score": number,
    "visitor_team_score": number,
    "season": number,
    "period": number,
    "status": string,
    "time": string,
    "postseason": false,
    "home_team": {
        "id": number,
        "abbreviation": string,
        "city": string,
        "conference": string,
        "division": string,
        "full_name": string,
        "name": string
    },
    "visitor_team": {
        "id": number,
        "abbreviation": string,
        "city": string,
        "conference": string,
        "division": string,
        "full_name": string,
        "name": string
    },
};