import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../routes';
import { Layout } from '../../components/MainComponents/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const CampaignNew = () => {
	const [contributionValue, setContributionValue] = useState<string>('');
	const [status, setStatus] = useState<{
		success?: string;
		loading?: boolean;
	}>({
		success: '',
		loading: false,
	});

	const [error, setError] = useState<string>('');

	const handleChange = () => (e: ChangeEvent<HTMLInputElement>) => {
		setContributionValue(e.currentTarget.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setStatus({ loading: true });
		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods.createCampaign(contributionValue).send({
				from: accounts[0],
			});
			await Router.pushRoute('/');
		} catch (error: unknown| any) {
			setError(error.message);
		}
		setStatus({ loading: false });
	};

	return (
		<Layout>
			<>
				<h3>New Campaign</h3>
				<Form onSubmit={handleSubmit} error={!!error}>
					<Form.Field>
						<label htmlFor='contibution'>Minimum contribution</label>
						<Input
							id='contibution'
							label='wei'
							labelPosition='right'
							type='number'
							value={contributionValue}
							onChange={handleChange()}
						/>
					</Form.Field>
					<Message error header='Oops!' content={error} />
					<Button loading={status.loading} disabled={status.loading} primary>
						Create
					</Button>
				</Form>
			</>
		</Layout>
	);
};

export default CampaignNew;
