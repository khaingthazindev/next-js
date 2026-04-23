import { Admin, User } from '@/app/components/conditional_render/UserAccount';

let mapping = {
		'admin': <Admin />,
		'user': <User />,
};

export default function Conditional({ role }) {
		let Compo = null; // the first character must be uppercase
		// if (role === 'admin') {
		// 		Compo = <Admin />;
		// } else if (role === 'user') {
		// 		Compo = <User />;
		// }
		Compo = mapping[role];
		return (<div>
				{Compo}
		</div>);
}