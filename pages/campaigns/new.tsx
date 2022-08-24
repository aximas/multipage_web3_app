import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Layout } from '../../components/MainComponents/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const CampaignNew = () => {
	const [contibutionValue, setContibutionValue] = useState<string>('');
	const [status, setStatus] = useState<{
		success?: string;
		error?: string;
	}>({
		success: '',
		error: '',
	});

	const handleChange = () => (e: ChangeEvent<HTMLInputElement>) => {
		setContibutionValue(e.currentTarget.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods.createCampaign(contibutionValue).send({
				from: accounts[0],
			});
		} catch (error) {
			console.log('error', error);
			if (error) {
				setStatus({ error: error.message });
			}
		}
	};

	return (
		<Layout>
			<>
				<h3>New Campaign</h3>
				<Form onSubmit={handleSubmit} error={!!status.error}>
					<Form.Field>
						<label htmlFor='contibution'>Minimum contribution</label>
						<Input
							id='contibution'
							label='wei'
							labelPosition='right'
							type='number'
							value={contibutionValue}
							onChange={handleChange()}
						/>
					</Form.Field>
					<Message error header='Oops!' content={status.error} />
					<Button primary>Create</Button>
				</Form>
			</>
		</Layout>
	);
};

export default CampaignNew;
