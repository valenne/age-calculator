import { useEffect } from 'react';
import { animatedResponseNumbers } from '../helpers/animation-numbers';

export function useReturningAge(date: string) {
	// Get the current date.
	const today = new Date();

	// Get the difference in milliseconds between the two dates.
	let differenceInMilliseconds = today.getTime() - new Date(date).getTime();

	// Get the difference in days.
	let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

	// Get the difference in years.
	const differenceInYears = Math.floor(differenceInDays / 365.25);

	// Get the remaining days after calculate the years
	differenceInDays = (differenceInDays / 365.25 - differenceInYears) * 365.25;

	// Get the difference in months.
	const differenceInMonths = Math.floor(differenceInDays / 30.41666666666667);

	// Get the remaining days after calculate the months
	differenceInDays =
		(differenceInDays / 30.41666666666667 - differenceInMonths) * 30.41666666666667;

	// Get the difference in years, months, and days.
	const difference = {
		years: differenceInYears,
		months: differenceInMonths,
		days: Math.floor(differenceInDays)
	};

	useEffect(() => {
		animatedResponseNumbers();
	}, [difference]);

	// Return the difference in years, months, and days.
	return difference;
}
