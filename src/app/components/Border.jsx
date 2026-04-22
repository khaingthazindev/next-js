export default function Border({ children }) {
		console.log('children ', children);
		return (<div style={{ border: "1px solid black", backgroundColor: "white" }}>
			Border Component
				{ children }
		</div>);
}