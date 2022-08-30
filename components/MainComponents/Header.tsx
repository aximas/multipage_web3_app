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
				CrowdCoin
			</Link>
			<Menu.Menu position='right'>
				<Link href='/'>
					Campaigns
				</Link>
				<Link href='/campaign/new'>
					+
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
