import { useState } from 'react';
import { Menu } from 'semantic-ui-react';

export const Header = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const handleItemClick = (e: any, { name }: { name: string }) => {
		setActiveItem(name);
	};

	return (
		<Menu>
			<Menu.Item name='crowdCoin'>CrowdCoin</Menu.Item>

			<Menu.Menu position='right'>
				<Menu.Item name='campaigns'>Campaigns</Menu.Item>

				<Menu.Item name='plus'>+</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
