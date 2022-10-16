import { ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
	children?: ReactNode;
	allowClose?: boolean;
	shouldCloseOnOverlayClick?: boolean;
	onRequestClose?: () => void;
	show: boolean;
}

export default function Modal(props: ModalProps) {
	const {
		children,
		show = false,
		shouldCloseOnOverlayClick = true,
		allowClose = true,
		onRequestClose = () => {},
	} = props;

	return (
		<ReactModal
			isOpen={show}
			shouldCloseOnOverlayClick={allowClose && shouldCloseOnOverlayClick}
			onRequestClose={onRequestClose}
			className='bg-white rounded-[5px] w-full max-w-[650px] m-6 p-6'
			overlayClassName='overlay'
			ariaHideApp={false}
			closeTimeoutMS={200}>
			<div className='w-[100%]'>{children}</div>
		</ReactModal>
	);
}
