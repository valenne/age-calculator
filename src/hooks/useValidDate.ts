import { useState } from 'react';
import { validateDate } from '../helpers/validate-date';
import { DateProps } from '../types/types';

export function useValidDate(setHisDate: any) {
	const [isValidDate, setIsValidDate] = useState('');

	const handleSubmitAge = (e: any) => {
		setIsValidDate('');
		setHisDate('');
		e.preventDefault();

		const data = new FormData(e.target);

		const capturedAgeData = Object.fromEntries(data) as DateProps;

		// validate input min and max
		const { isValid, fixedDate } = validateDate(capturedAgeData);

		if (isValid) {
			setHisDate({ isValid, fixedDate });
			return;
		}
		setIsValidDate('Date is not valid');
		setHisDate('');
		setTimeout(() => {
			setIsValidDate('');
		}, 3000);
	};

	return { isValidDate, handleSubmitAge };
}
