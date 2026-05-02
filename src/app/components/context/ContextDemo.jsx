'use client';

import {useContext, useState} from 'react';
import {ThemeContext} from "@/app/components/context/ThemeContext";

function Level1UI() {
	return (<div>
		Level1 UI
			<Level2UI />
	</div>);
}

function Level2UI() {
		return (<div>
			Level2 UI
				<Level3UI />
		</div>);
}

function Level3UI() {
		const theme = useContext(ThemeContext);
		return (<div style={{
				color: theme.color
		}}>
				Level3 UI
		</div>);
}

export default function ContextDemo() {
		const [color, setColor] = useState('green');
		return (<div>
				<button onClick={() => setColor('blue')}>Change Color</button>
				<ThemeContext.Provider value={{color}}>
						<Level1UI />
				</ThemeContext.Provider>
		</div>);
}