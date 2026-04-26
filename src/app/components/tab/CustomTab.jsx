'use client';
import './tab.css';
import {useState} from "react";

function TabHeader(props) {
		console.log('TabHeader render');
		return <div className={"tab-header"} onClick={props.onClick}>{props.header}</div>;
}

export default function CustomTab({ headers, children }) {
		console.log('CustomTab render');
		let [ currentIndex, setCurrentIndex ] = useState(0);
		
	return (<div>
			<div>
					{ headers.map((header, index) => <TabHeader key={index} onClick={() => setCurrentIndex(index)}
					                                            header={header}/>) }
			</div>
			<div className={ 'tab-content' }>
					{ children[currentIndex] }
			</div>
	</div>);
}