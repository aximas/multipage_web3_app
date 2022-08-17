import React from 'react';

export const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<header>It is header</header>
			<main>{children}</main>
			<footer>It is footer</footer>
		</>
	);
};
