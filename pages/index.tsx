import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, {useState, useEffect} from 'react';
import {Card, Button} from 'semantic-ui-react';
import {Layout} from '../components/MainComponents/Layout';
import Link from 'next/link';
import {campaignData} from '../core/helpers/getCompains';

type Campaigns = {
    header: string;
    fluid: boolean;
    description: React.ReactNode;
};

const Home: NextPage = () => {
    const [items, setItems] = useState<Campaigns[]>([]);

    useEffect(() => {
        let cleanUpFunction = false;

        (async () => {
            const data =  await campaignData();

            if (data.length && !cleanUpFunction) {
                const items = data.map((address: string) => {
                    return {
                        header: address,
                        fluid: true,
                        description: (
                            <Link href={`/campaign/${address}`}>
                                View campaign
                            </Link>
                        ),
                    };
                });
                setItems(items);
            }
        })();

        return () => {
            cleanUpFunction = true;
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Mulipage web3 app</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Layout>
                <main className={styles.main}>
                    {/*// @ts-ignore*/}
                    <Link href="/campaign/new">
                        <a className={styles.btnWrapper}>
                            <Button
                                content="Create a campaign"
                                icon="add circle"
                                labelPosition="right"
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
