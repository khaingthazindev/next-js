'use client';

import {Component} from "react";
import {ErrorBoundary} from "react-error-boundary";

function ProblemComponent({message}) {
		console.log(message.toUpperCase());
		return (<>
			Hello {message}
		</>);
}

export default class ErrorDemo extends Component {
		render() {
				return (<div>
						ErrorDemo
						<ErrorBoundary fallback={<p>Something went wrong</p>}>\
								{/*<ProblemComponent />*/}
								<ProblemComponent message={'Testing for error boundary using react-error-boundary package if you want to test error do not pass message prop'} />
						</ErrorBoundary>
				
				</div>)
		}
}