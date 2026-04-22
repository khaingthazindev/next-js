export function User() {
		return (<div>
				<h3>User</h3>
		</div>);
}

export function Admin() {
		return (<div>
				<h3>Admin</h3>
		</div>);
}

export default function UserAccount({ role }) {
		/*
		JS code
		if (role === 'admin') {
				return <Admin />
		} else if (role === 'user') {
				return <User />
		} else {
				return null;
		}
		*/
		
		 return (<div>
				 { role === 'admin' && <h3>User is Admin</h3>}
				 { role === 'admin' ? <Admin /> : role === 'user' ? <User /> : null }
		 </div>);
}