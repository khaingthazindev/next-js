'use client';

import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";
export default function FetchUser() {
		const [loading, data] = useFetch('https://dummyjson.com/users');
		return (<div>
				{loading ? <div>Loading...</div> : null}
				<ul>
						{ data?.users?.map((user) => <li key={user.id}>{user.firstName}</li>) }
				</ul>
		</div>);
}