// import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';


export const Header = () => {
	// const [activeItem, setActiveItem] = useState<string>('');
	//
	// const handleItemClick = (e: any, { name }: { name: string }) => {
	// 	setActiveItem(name);
	// };
	return (
		<Menu>
			<Link href='/'>
				<a className='item'>CrowdCoin</a>
			</Link>
			<Menu.Menu position='right'>
				<Link href='/'>
					<a className='item'>Campaigns</a>
				</Link>
				<Link href='/campaign/new'>
					<a className='item'>+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
