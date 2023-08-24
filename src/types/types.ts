export type DateProps = {
	dayInput: string | undefined;
	monthInput: string | undefined;
	yearInput: string | undefined;
};

export type ReturningFinalDate = {
	isValid?: boolean;
	fixedDate?: string;
};
