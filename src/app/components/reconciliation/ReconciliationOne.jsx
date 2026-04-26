'use client';

import { useState } from 'react';
import Counter from './Counter';

export default function ReconciliationOne() {
		const [showB, setShowB] = useState(true);
		return (
				<div>
						{/*will reset state because different position*/}
						<Counter />
						{showB && <Counter />}
						<label>
								<input
										type="checkbox"
										checked={showB}
										onChange={e => {
												setShowB(e.target.checked)
										}}
								/>
								Render the second counter
						</label>
				</div>
		);
}


