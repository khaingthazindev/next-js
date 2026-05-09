'use client';

import './carousel.css'
import {useState} from "react";

export default function CarouselDemo({children}) {
		const [current, setCurrent] = useState(0);
		const btnLeftClick = () => {
				if (current === 0) {
						setCurrent(children.length - 1);
				} else {
						setCurrent(current - 1);
				}
		}
		const btnRightClick = () => {
				setCurrent((current + 1) % children.length);
		}
		return (<div>
				<div className={'carousel-container'}>
						<div className="carousel-content">
								{children[current]}
						</div>
				</div>
				<div>
						<button type={'button'} onClick={btnLeftClick}>
								<h3>{'<<'}</h3>
						</button>
						<button type={'button'} onClick={btnRightClick}>
								<h3>{'>>'}</h3>
						</button>
				</div>
		</div>);
}