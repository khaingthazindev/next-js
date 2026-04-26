'use client';

export default function CustomButton({ onClickHandler, label }) {
		return (<button type={ "button" } onClick={ onClickHandler }>{ label }</button>)
}