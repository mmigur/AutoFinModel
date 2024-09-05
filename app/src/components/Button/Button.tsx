import React from 'react'
import './Button.css';

interface IButton {
	name: string
	onClick: () => void
}

export const Button = ({...props}: IButton) => {
	return (
		<button className='ButtonPrimary' onClick={props.onClick}>{props.name}</button>
	)
}
