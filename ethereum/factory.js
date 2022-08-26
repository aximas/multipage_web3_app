import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xDA957561A78D5d9B6E9846b667D2bF8BA1AAd746',
);

export default instance;
