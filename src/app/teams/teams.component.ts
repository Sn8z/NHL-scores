import { Component, OnInit } from '@angular/core';
import { NhlApiService } from '../services/nhl-api.service';

@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
	public teams = [];

	constructor(private nhl: NhlApiService) { }

	ngOnInit(): void {
		this.getNhlTeams();
	}

	private getNhlTeams = () => {
		this.nhl.getNhlTeams().subscribe((response) => {
			console.log(response.teams);
			this.teams = response.teams;
		});
	}
}
