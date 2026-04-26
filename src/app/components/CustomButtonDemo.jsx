'use client';

import CustomButton from "@/app/components/CustomButton";

export default function CustomButtonDemo() {
		const onClickHandler = (e) => {
				console.log('clicked');
		}
		return (<div>
				<CustomButton onClickHandler={ onClickHandler } label={ 'Click Me' }  />
		</div>);
}