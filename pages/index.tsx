import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import factory from '../ethereum/factory';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Layout } from '../components/MainComponents/Layout';
import { Link } from '../routes';

type Campaigns = {
	header: string;
	fluid: boolean;
	description: React.ReactNode;
};

const Home: NextPage = () => {
	const [campaigns, setCampaigns] = useState<string[]>([]);
	const [items, setItems] = useState<Campaigns[]>([]);

	useEffect(() => {
		(async () => {
			const campaigns = await factory.methods.getDeployedCampaigns().call();
			setCampaigns(campaigns);
		})();

		if (campaigns.length) {
			const items = campaigns.map((address) => {
				return {
					header: address,
					fluid: true,
					description: (
						// @ts-ignore
						<Link route={`/campaign/${address}`}>
							<a>View campaign</a>
						</Link>
					),
				};
			});
			setItems(items);
		}
	}, [campaigns]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Mulipage web3 app</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<main className={styles.main}>
					{/*// @ts-ignore*/}
					<Link route='/campaign/new'>
						<a className={styles.btnWrapper}>
							<Button
								content='Create a campaign'
								icon='add circle'
								labelPosition='right'
								primary
							/>
						</a>
					</Link>
					<Card.Group items={items}/>
				</main>
			</Layout>
		</div>
	);
};

export default Home;
