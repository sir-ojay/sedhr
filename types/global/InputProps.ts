export type InputProps = {
	label?: string;
	placeholder?: string;
	type?:
		| "text"
		| "password"
		| "email"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "date"
		| "time"
		| "datetime-local"
		| "month"
		| "week"
		| "color"
		| "file"
		| "range"
		| "hidden"
		| "image"
		| "checkbox"
		| "radio"
		| "submit"
		| "reset"
		| "button";
	id?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: boolean | string | number;
	autoComplete?: string | boolean;
	disabled?: boolean;
	step?: number;
	name?: string;
	className?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	rules?: {
		required?: boolean;
		minLength?: number;
		maxLength?: number;
		pattern?: string;
		min?: number;
		max?: number;
		step?: number;
		email?: boolean;
		number?: boolean;
	};
} & React.InputHTMLAttributes<HTMLInputElement>;
