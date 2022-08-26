import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../../routes';

export const Header = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const handleItemClick = (e: any, { name }: { name: string }) => {
		setActiveItem(name);
	};

	return (
		<Menu>
			<Link route='/'>
				<a className='item'>CrowdCoin</a>
			</Link>

			<Menu.Menu position='right'>
				<Link route='/'>
					<a className='item'>Campaigns</a>
				</Link>

				<Link route='/campaign/new'>
					<a className='item'>+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
