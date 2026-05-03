'use client';

import {useEffect, useRef, useState} from "react";

function VideoPlayer({src, isPlaying}) {
		const ref = useRef(null);
		console.log('Video Player render');
		// DOM api
		useEffect(() => {
				if (isPlaying) {
						ref.current.pause();
				} else {
						ref.current.play();
						
				}
		})
		return <video ref={ref}
		              width={"250px"}
		              src={src} muted></video>;
}


export default function WhyEffect() {
		const [isPlaying, setIsPlaying] = useState(false);
		const [count, setCount] = useState(0);
		const onClickHandler = () => {
				setIsPlaying(!isPlaying);
		}
		console.log('WhyEffect Render');
		return (<div>
				<button type={'button'} onClick={() => setCount(count + 1)}>inc {count}</button>
				&nbsp;<button type={'button'} onClick={onClickHandler}>{isPlaying ? 'Play' : 'Pause'}</button>
				&nbsp;<VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying} />
		</div>);
}