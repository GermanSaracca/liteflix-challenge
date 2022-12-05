import React from 'react'
import ReactModal from 'react-modal'
import { Close } from '../Icons'
import './index.scss'

interface IProps {
	isOpen: boolean
	children: React.ReactNode
	contentLabel?: string
	onRequestClose: () => void
	headerTitle?: string
}

const Modal = ({
	isOpen,
	children,
	onRequestClose,
	contentLabel = 'Dialog',
	headerTitle,
}: IProps) => {
	return (
		<ReactModal
			isOpen={isOpen} /* Boolean describing if the modal should be shown or not. */
			contentLabel={
				contentLabel
			} /* String indicating how the content container should be announced to screenreaders */
			onRequestClose={onRequestClose} /* Function that will be run when the modal is requested
			//  to be closed (either by clicking on overlay or pressing ESC).Note: It is not called if isOpen is changed by other means. */
			closeTimeoutMS={350}
		>
			<div className='modal_inner-content'>
				<button
					className='modal_close-button'
					onClick={onRequestClose}
					type='button'
					aria-label='Close modal'
				>
					<Close width={15} height={15} />
				</button>

				{headerTitle && <h3 className='modal_title'>{headerTitle}</h3>}
				{children}
			</div>
		</ReactModal>
	)
}
export default Modal
