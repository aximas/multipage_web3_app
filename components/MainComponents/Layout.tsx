import React from 'react';
import { Container } from 'semantic-ui-react';
import { Header } from './Header';
import 'semantic-ui-css/semantic.min.css';

export const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<Container style={{ marginTop: '10px' }}>
			<Header />
			{children}
			<footer>It is footer</footer>
		</Container>
	);
};
