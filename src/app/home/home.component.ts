import { Component, OnInit } from '@angular/core';
import { NhlApiService } from '../services/nhl-api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public games = [];

	constructor(private nhl: NhlApiService) { }

	ngOnInit(): void {
		this.getNhlSchedule();
	}

	private getNhlSchedule = () => {
		this.nhl.getNhlSchedule().subscribe((response) => {
			console.log(response);
			console.log(response.dates[0].games);
			this.games = response.dates[0].games;
		});
	}
}