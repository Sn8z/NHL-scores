import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'localTimePipe'
})
export class LocalTimePipePipe implements PipeTransform {
	private weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	transform(date: string): string {
		let originalDate = new Date(date);
		return this.getTime(originalDate);
	}

	private getTime = (date: Date): string => {
		const days = date.getDay();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		return this.weekdays[days] + "  " + hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');
	}
}
