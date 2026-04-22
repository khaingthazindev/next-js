import { Admin, User } from '@/app/components/conditional_render/UserAccount';

export default function Conditional({ role }) {
		let Compo = null; // the first character must be uppercase
		if (role === 'admin') {
				Compo = <Admin />;
		} else if (role === 'user') {
				Compo = <User />;
		}
		return (<div>
				{Compo}
		</div>);
}