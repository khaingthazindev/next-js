function Child({ message }) {
		return (<div>
				Child { message }
		</div>)
}

function Parent({message}) {
		return (<div>
				Parent
				<Child message={message} />
		</div>)
}

function GrandParent({message}) {
		return (<div>
				Grandparent
				<Parent message={message} />
		</div>)
}

export default function WhyContext() {
	return (<div>
			<GrandParent message={'Hello'} />
	</div>)
}