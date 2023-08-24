import { DateProps } from '../types/types';

export function validateDate(passDate: DateProps) {
	const error: string = '';

	const stringDate = `${passDate.yearInput}-${passDate.monthInput}-${passDate.dayInput}`;

	const isValid = isValidDate(stringDate);

	return {
		isValid,
		fixedDate: isValid && stringDate
	};
}

function isValidDate(date: string) {
	// Check if the date is in the correct format.
	const dateParts = date.split('-');
	if (dateParts.length !== 3) {
		return false;
	}

	// Check if the year is a valid year.
	const year = parseInt(dateParts[0], 10);

	// can set up the minumun range of what year you need
	if (year < 0 || year > 2099) {
		return false;
	}

	// Check if the month is a valid month.
	const month = parseInt(dateParts[1], 10);

	if (month < 1 || month > 12) {
		return false;
	}

	// Check if the day is a valid day for the month.
	const day = parseInt(dateParts[2], 10);
	const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (day < 1 || day > daysInMonth[month - 1]) {
		return false;
	}

	// If all of the checks passed, the date is valid.
	return true;
}
