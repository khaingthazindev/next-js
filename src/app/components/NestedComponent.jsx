function Parent(props) {
		console.log('Parent ', props)
		return (<div>
				Parent
				<Child label={props.label} />
		</div>)
}

function Child({ label }) {
		return (<div>
				Child
				Label { label }
		</div>)
}

export default function NestedComponent(props) {
		return (<div>
				NestedComponent
				<Parent {...props} />
		</div>);
}