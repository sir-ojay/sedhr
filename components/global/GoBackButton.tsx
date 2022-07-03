import { useRouter } from "next/router";

type GoBackButtonProps = {
	onClick?: () => void;
	label?: string;
};

const GoBackButton = ({ label }: GoBackButtonProps) => {
	const router = useRouter();
	const handleClick = () => {
		router.back();
	};
	return (
		<button
			onClick={handleClick}
			type='button'
			className='flex items-center gap-6 font-clash font-semibold text-2xl text-dark-900'>
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M6.66699 19.9997C6.66699 19.0792 7.41318 18.333 8.33366 18.333H31.667C32.5875 18.333 33.3337 19.0792 33.3337 19.9997C33.3337 20.9201 32.5875 21.6663 31.667 21.6663H8.33366C7.41318 21.6663 6.66699 20.9201 6.66699 19.9997Z'
					fill='#25324B'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M7.15515 18.8212C7.80602 18.1703 8.8613 18.1703 9.51217 18.8212L19.5122 28.8212C20.163 29.472 20.163 30.5273 19.5122 31.1782C18.8613 31.8291 17.806 31.8291 17.1551 31.1782L7.15515 21.1782C6.50427 20.5273 6.50427 19.472 7.15515 18.8212Z'
					fill='#25324B'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M19.5122 8.82116C20.163 9.47204 20.163 10.5273 19.5122 11.1782L9.51217 21.1782C8.8613 21.8291 7.80602 21.8291 7.15515 21.1782C6.50427 20.5273 6.50427 19.472 7.15515 18.8212L17.1551 8.82116C17.806 8.17029 18.8613 8.17029 19.5122 8.82116Z'
					fill='#25324B'
				/>
			</svg>
			<span>{label}</span>
		</button>
	);
};

export default GoBackButton;
